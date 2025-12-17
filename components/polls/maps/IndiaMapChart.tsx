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
}

const IndiaMapChart: React.FC<IndiaMapChartProps> = ({ onStateSelected }) => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 800, center: [78, 23] }} height={500}>
      <Geographies geography={'/topoJsons/india.json'}>
        {({ geographies }: GeographiesRenderProps) =>
          geographies.map((geo: Geography) => {
            const { name } = geo.properties;
            return (
              <React.Fragment key={geo.rsmKey}>
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    // setTooltipContent(`${name}`);
                  }}
                  onMouseLeave={() => {
                    // setTooltipContent('');
                  }}
                  onClick={() => {
                    onStateSelected(`${name}`);
                  }}
                  style={{
                    default: {
                      fill: '#E3F2FD',
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
