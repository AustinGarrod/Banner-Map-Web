import { LatLngTuple } from "leaflet";

interface ISettings {
  MAP_CENTER: LatLngTuple,
  FULL_MAP_ZOOM: number,
  MAP_MIN_ZOOM: number,
}

const SETTINGS: ISettings = {
  MAP_CENTER: [44.083071, -79.154525],
  FULL_MAP_ZOOM: 12,
  MAP_MIN_ZOOM: 2
}

export default SETTINGS;