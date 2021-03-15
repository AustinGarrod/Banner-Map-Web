import { LatLngTuple } from "leaflet";

interface ISettings {
  MAP_CENTER: LatLngTuple,
  FULL_MAP_ZOOM: number,
  MAP_MIN_ZOOM: number,
  API_DOMAIN: string,
  API_KEY: string
}

const SETTINGS: ISettings = {
  MAP_CENTER: [44.083071, -79.154525],
  FULL_MAP_ZOOM: 12,
  MAP_MIN_ZOOM: 2,
  API_DOMAIN: "https://banner-map-api.herokuapp.com",
  API_KEY: "9QrUOtl332LYVTt2FJdnvmgFFiIUCtJt4F4SgosNYNg92qlAlZDqkNpVDu806oGexhCvTR5AHZjacKVe8KMdKbvaebcuUfyy24JE4Tv7sWUQnBQhoZCXT1GFBn0HBCf2NjC1zKIQfa3GLF4zVCakCekVYI9nnri9tqzInCjCZ8NqlyzPxRg3oB4OBCxOKhpn6JQ6hJmwetJWiDEjDfVKHq02NIb1l5gK8ZeNREiREFhq5aoQ6m3ZBbueBCIqyQiA"
}

export default SETTINGS;