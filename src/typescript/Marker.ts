import { LatLngTuple } from "leaflet";

export default interface Marker {
  position: LatLngTuple,
  text: string
}