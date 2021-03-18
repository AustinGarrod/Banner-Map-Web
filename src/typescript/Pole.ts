import Banner from './Banner';
import { LatLngTuple } from 'leaflet';

export default interface Pole {
  location: LatLngTuple,
  banners: Banner[]
}