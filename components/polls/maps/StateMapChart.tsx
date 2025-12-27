import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { statesMapConfig } from './data';
import { GeographiesRenderProps, Geography as GeographyType, StateMapChartProps } from './types';

const StateMapChart: React.FC<StateMapChartProps> = ({
  name,
  width,
  height,
  scale,
  defaultColorMapping,
  onHoverStateChange,
  onEntrySelected,
}) => {
  const json = `/topoJsons/states/${name}.json`;
  const config = statesMapConfig[name];
  if (!config) {
    return null;
  }
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: config.scaleMap ?? scale, center: config.centerMap }}
      height={height}
      width={width}
    >
      <Geographies geography={json}>
        {({ geographies }: GeographiesRenderProps) =>
          geographies.map((geo: GeographyType) => {
            const { district: name } = geo.properties;
            return (
              name && (
                <React.Fragment key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    onMouseEnter={() => onHoverStateChange?.(name)}
                    onMouseLeave={() => onHoverStateChange?.(null)}
                    onClick={() => {
                      onEntrySelected?.(`${name}`);
                    }}
                    data-tooltip-id="district-tooltip"
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
              )
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default StateMapChart;
