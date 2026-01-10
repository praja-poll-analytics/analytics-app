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
            if (!districtName) {
              return null;
            }
            const defaultColor = isSelected ? '#1976D2' : defaultColorMapping?.[districtName] || '#FFFFFF';
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
              )
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default StateMapChart;
