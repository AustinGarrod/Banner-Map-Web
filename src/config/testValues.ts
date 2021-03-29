import { LatLngTuple } from "leaflet"
import Banner from "../typescript/Banner"

interface ITestValues {
  latLngTupleValue: LatLngTuple,
  twoBannerArray: Banner[],
  banner: Banner
}

const TEST_VALUES: ITestValues = {
  latLngTupleValue: [44.083071, -79.154525],
  twoBannerArray: [{"_id": "60452325009a6224e042a1d8","number": 9,"poll": "","edition": 2015,"enabled": false,"lastName": "Chennette","firstName": "Edward J.","bannerName": "Edward J. Chennette","era": "Second World War","branch": "Army","sponsor": "The Chennette Family","lat": 0,"long": 0},{"_id": "60452325009a6224e042a1d9","number": 15,"poll": "","edition": 2015,"enabled": false,"lastName": "Edwards","firstName": "William \"Sam\"","bannerName": "William \"Sam\" Edwards","era": "Second World War","branch": "Army","sponsor": "The Edwards Family","lat": 0,"long": 0}],
  banner: {"_id": "60452325009a6224e042a1d8","number": 9,"poll": "","edition": 2015,"enabled": false,"lastName": "Chennette","firstName": "Edward J.","bannerName": "Edward J. Chennette","era": "Second World War","branch": "Army","sponsor": "The Chennette Family","lat": 0,"long": 0}
}

export default TEST_VALUES