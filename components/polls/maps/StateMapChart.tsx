import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { statesMapConfig } from './data';
import { GeographiesRenderProps, Geography as GeographyType, StateMapChartProps } from './types';

const commonStyle = {
  stroke: '#666666',
  strokeWidth: 0.75,
  outline: 'none',
  cursor: 'pointer',
  filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2))',
};

const StateMapChart: React.FC<StateMapChartProps> = ({
  name,
  width,
  height,
  scale,
  defaultColorMapping,
  onHoverStateChange,
  onEntrySelected,
  selectedDistrict,
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
            const { district: districtName } = geo.properties;
            const isSelected =
              selectedDistrict && districtName?.toLowerCase().startsWith(selectedDistrict.toLowerCase());
            return (
              districtName && (
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
                        fill: isSelected ? '#1976D2' : defaultColorMapping?.[districtName] || '#FFFFFF',
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
              )
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default StateMapChart;
