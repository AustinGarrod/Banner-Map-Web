import Banner from './Banner';
import { LatLngTuple } from 'leaflet';

export default interface Pole {
  position: LatLngTuple,
  banners: Banner[]
}