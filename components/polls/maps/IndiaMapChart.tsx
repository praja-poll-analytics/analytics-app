import { geoCentroid } from 'd3-geo';
import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { stateAbbreviations } from './data';
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
  selectedState,
  selectedStateColor = '#EC5528',
}) => {
  const [hoveredState, setHoveredState] = React.useState<string | null>(null);
  const [pressedState, setPressedState] = React.useState<string | null>(null);

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
            const abbreviation = stateAbbreviations[name];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const centroid = geoCentroid(geo as any);

            const isHovered = hoveredState === name;
            const isPressed = pressedState === name;
            const isSelected = selectedState === name;

            const getFillColor = () => {
              if (isSelected) return selectedStateColor;
              return defaultColorMapping?.[name]?.bg || '#FFFFFF';
            };

            const getTextColor = () => {
              if (isSelected || isHovered || isPressed) return '#FFFFFF';
              return defaultColorMapping?.[name]?.fg || '#333';
            };

            return (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  geography={geo}
                  onMouseEnter={() => {
                    setHoveredState(name);
                    onHoverStateChange?.(name);
                  }}
                  onMouseLeave={() => {
                    setHoveredState(null);
                    onHoverStateChange?.(null);
                  }}
                  onMouseDown={() => setPressedState(name)}
                  onMouseUp={() => setPressedState(null)}
                  onClick={() => {
                    onEntrySelected(`${name}`);
                  }}
                  data-tooltip-id="map-tooltip"
                  data-tooltip-content={name}
                  style={{
                    default: {
                      fill: getFillColor(),
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
                {abbreviation && (
                  <Marker coordinates={centroid}>
                    <text
                      textAnchor="middle"
                      fontSize={8}
                      fontWeight="600"
                      fill={getTextColor()}
                      style={{ userSelect: 'none', pointerEvents: 'none' }}
                    >
                      {abbreviation}
                    </text>
                  </Marker>
                )}
              </React.Fragment>
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default IndiaMapChart;
