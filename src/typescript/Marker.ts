import { LatLngTuple } from "leaflet";
import Banner from "./Banner";

export default interface Marker {
  position: LatLngTuple,
  banners: Banner[]
}