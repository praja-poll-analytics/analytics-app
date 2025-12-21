import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

interface GeographyProperties {
  name: string;
}

interface Geography {
  rsmKey: string;
  properties: GeographyProperties;
}

interface GeographiesRenderProps {
  geographies: Geography[];
}

interface IndiaMapChartProps {
  onStateSelected: (stateName: string) => void;
  distinctStates: string[] | null;
  width?: number;
  height: number;
  scale: number;
  defaultColorMapping?: Record<string, string>;
  onHoverStateChange?: (stateName: string | null) => void;
}

const IndiaMapChart: React.FC<IndiaMapChartProps> = ({
  onStateSelected,
  width,
  height,
  scale,
  defaultColorMapping,
  onHoverStateChange,
}) => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: scale, center: [81.96, 23] }}
      height={height}
      width={width}
    >
      <Geographies geography={'/topoJsons/india.json'}>
        {({ geographies }: GeographiesRenderProps) =>
          geographies.map((geo: Geography) => {
            const { name } = geo.properties;
            return (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onMouseEnter={() => onHoverStateChange?.(name)}
                  onMouseLeave={() => onHoverStateChange?.(null)}
                  onClick={() => {
                    onStateSelected(`${name}`);
                  }}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={name}
                  style={{
                    default: {
                      fill: defaultColorMapping?.[name] || '#E3F2FD',
                      stroke: '#333333',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    hover: {
                      fill: '#1976D2',
                      stroke: '#333333',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#0D47A1',
                      stroke: '#333333',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: 'pointer',
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

export default IndiaMapChart;
