import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { GeographiesRenderProps, Geography as GeographyType, IndiaMapChartProps } from './types';

const commonStyle = {
  stroke: '#666666',
  strokeWidth: 0.75,
  outline: 'none',
  cursor: 'pointer',
  filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2))',
};

const IndiaMapChart: React.FC<IndiaMapChartProps> = ({
  width,
  height,
  scale,
  defaultColorMapping,
  onHoverStateChange,
  onEntrySelected,
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
          geographies.map((geo: GeographyType) => {
            const { name } = geo.properties;
            return (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onMouseEnter={() => onHoverStateChange?.(name)}
                  onMouseLeave={() => onHoverStateChange?.(null)}
                  onClick={() => {
                    onEntrySelected(`${name}`);
                  }}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={name}
                  style={{
                    default: {
                      fill: defaultColorMapping?.[name] || '#FFFFFF',
                      ...commonStyle,
                    },
                    hover: {
                      fill: '#1976D2',
                      ...commonStyle,
                    },
                    pressed: {
                      fill: '#0D47A1',
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

export default IndiaMapChart;
