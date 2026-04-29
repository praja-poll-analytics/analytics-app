declare module 'topojson-client' {
  import { Feature, FeatureCollection, GeoJsonObject } from 'geojson';
  export function feature(topology: unknown, object: unknown): Feature | FeatureCollection | GeoJsonObject;
}
