import { Popover } from 'radix-ui';
import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { statesMapping } from './data';

interface MapCountData {
  district: string;
  noOfSchools: number;
}

interface StateChartProps {
  selectedState: string;
  mapCountData: MapCountData[] | null;
  setDistrictName: (districtName: string) => void;
}

interface GeographyProperties {
  district: string;
}

interface Geography {
  rsmKey: string;
  properties: GeographyProperties;
}

interface GeographiesRenderProps {
  geographies: Geography[];
}

const StateChart: React.FC<StateChartProps> = ({ selectedState, mapCountData, setDistrictName }) => {
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const zoomMap = 1;
  const stateConfig = statesMapping[selectedState as keyof typeof statesMapping];
  const { jsonName, scaleMap, centerMap } = stateConfig || {};
  const geoURL = `/topoJsons/states/${jsonName}.json`;

  const distinctDistricts = mapCountData ? mapCountData.map((data) => data.district) : null;

  function totalSchoolsByDistrict(data: MapCountData[], selectedDistrict: string): number {
    if (data) {
      return data
        .filter((entry) => entry.district === selectedDistrict)
        .reduce((total, entry) => total + entry.noOfSchools, 0);
    }
    return 0;
  }

  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={150}
        height={150}
        projectionConfig={{ scale: scaleMap }}
      >
        <ZoomableGroup zoom={zoomMap} center={centerMap}>
          <Geographies geography={geoURL}>
            {({ geographies }: GeographiesRenderProps) =>
              geographies.map((geo: Geography) => {
                const { district } = geo.properties;
                return (
                  <>
                    {distinctDistricts && distinctDistricts.includes(district) ? (
                      <Popover.Root>
                        <Popover.Content>
                          <div className="flex-space-between gap-12px">
                            <span>{district}</span>
                            {tooltipContent && totalSchoolsByDistrict(mapCountData || [], tooltipContent) > 0 && (
                              <span>{totalSchoolsByDistrict(mapCountData || [], tooltipContent)}</span>
                            )}
                          </div>
                        </Popover.Content>
                        <Popover.Trigger>
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                              setTooltipContent(`${district}`);
                            }}
                            onMouseLeave={() => {
                              setTooltipContent('');
                            }}
                            onClick={() => {
                              setDistrictName(`${district}`);
                            }}
                            style={{
                              default: {
                                fill: 'orange',
                                outline: 'none',
                              },
                              hover: {
                                fill: '#FF5722',
                                outline: 'none',
                              },
                            }}
                          />
                        </Popover.Trigger>
                      </Popover.Root>
                    ) : (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${district}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent('');
                        }}
                        onClick={() => {
                          setDistrictName(`${district}`);
                        }}
                        style={{
                          default: {
                            fill: 'green',
                            outline: 'none',
                          },
                          hover: {
                            fill: 'red',
                            outline: 'none',
                          },
                        }}
                      />
                    )}
                  </>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default StateChart;
