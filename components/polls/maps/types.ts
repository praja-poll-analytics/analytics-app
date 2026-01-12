import { StateColors } from '../types';

export interface GeographyProperties {
  name: string;
  district?: string;
}

export interface Geography {
  rsmKey: string;
  properties: GeographyProperties;
}

export interface GeographiesRenderProps {
  geographies: Geography[];
}

export interface IndiaMapChartProps {
  width?: number;
  height: number;
  scale?: number;
  defaultColorMapping?: Record<string, StateColors>;
  onHoverStateChange?: (stateName: string | null) => void;
  onEntrySelected: (stateName: string) => void;
  selectedState?: string | null;
  selectedStateColor?: string;
}

export interface StateMapChartProps {
  name: string;
  width?: number;
  height: number;
  scale?: number;
  defaultColorMapping?: Record<string, string>;
  onHoverStateChange?: (entry: string | null) => void;
  onEntrySelected?: (entry: string) => void;
  selectedDistrict?: string | null;
}
