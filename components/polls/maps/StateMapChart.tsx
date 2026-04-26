'use client';

import { geoMercator, GeoProjection } from 'd3-geo';
import { ExtendedFeatureCollection } from 'd3-geo';
import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography, ProjectionFunction } from 'react-simple-maps';
import { feature } from 'topojson-client';
import { statesMapConfig } from './data';
import { GeographiesRenderProps, Geography as GeographyType, StateMapChartProps } from './types';

const MAP_PADDING = 8;
const DEFAULT_WIDTH = 800;

const commonStyle = {
  stroke: '#666666',
  strokeWidth: 0.75,
  outline: 'none',
  cursor: 'pointer',
  filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2))',
};

interface Topology {
  type: 'Topology';
  objects: Record<string, unknown>;
}

const StateMapChart: React.FC<StateMapChartProps> = ({
  name,
  width = DEFAULT_WIDTH,
  height,
  defaultColorMapping,
  onHoverStateChange,
  onEntrySelected,
  selectedDistrict,
}) => {
  const [topology, setTopology] = useState<Topology | null>(null);
  const [projection, setProjection] = useState<GeoProjection | null>(null);
  const config = statesMapConfig[name];

  useEffect(() => {
    if (!config) return;
    let cancelled = false;
    fetch(`/topoJsons/states/${name}.json`)
      .then((r) => r.json() as Promise<Topology>)
      .then((topo) => {
        if (cancelled) return;
        const objectKey = Object.keys(topo.objects)[0];
        const featureCollection = feature(topo, topo.objects[objectKey]) as ExtendedFeatureCollection;
        const proj = geoMercator().fitExtent(
          [
            [MAP_PADDING, MAP_PADDING],
            [width - MAP_PADDING, height - MAP_PADDING],
          ],
          featureCollection
        );
        setTopology(topo);
        setProjection(() => proj);
      });
    return () => {
      cancelled = true;
    };
  }, [name, width, height, config]);

  if (!config || !topology || !projection) {
    return null;
  }

  return (
    <ComposableMap projection={projection as unknown as ProjectionFunction} height={height} width={width}>
      <Geographies geography={topology}>
        {({ geographies }: GeographiesRenderProps) =>
          geographies.map((geo: GeographyType) => {
            const { district: districtName } = geo.properties;
            const isSelected =
              selectedDistrict && districtName?.toLowerCase().startsWith(selectedDistrict.toLowerCase());
            if (!districtName) {
              return null;
            }
            const defaultColor = isSelected ? '#1976D2' : defaultColorMapping?.[districtName] || '#FFFFFF';
            return (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onMouseEnter={() => onHoverStateChange?.(districtName)}
                  onMouseLeave={() => onHoverStateChange?.(null)}
                  onClick={() => {
                    onEntrySelected?.(`${districtName}`);
                  }}
                  data-tooltip-id="district-tooltip"
                  data-tooltip-content={districtName}
                  style={{
                    default: {
                      fill: defaultColor,
                      ...commonStyle,
                    },
                    hover: {
                      fill: onHoverStateChange ? '#1976D2' : defaultColor,
                      ...commonStyle,
                    },
                    pressed: {
                      fill: onEntrySelected ? '#0D47A1' : defaultColor,
                      ...commonStyle,
                    },
                  }}
                />
              </React.Fragment>
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default StateMapChart;
