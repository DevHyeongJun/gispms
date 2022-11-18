import View from 'ol/View';
import Map from 'ol/Map';
import {TileMap} from '@/js/map/layer/tile/Tiles';
import proj4 from 'proj4/dist/proj4';
import {register} from 'ol/proj/proj4';
import {
 get
} from 'ol/proj';

proj4.defs([
  ['EPSG:5186', '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs']
  , ['EPSG:5181', '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs']
]);

register(proj4);


export default {
  createMap : (eleId) => {
    return new Map({
      target: eleId,
      renderer: "webgl",
      logo : false,
      layers: [
        TileMap.daumMap()
      ],
      // the map view will initially show the whole world
      view: new View({
        projection: get('EPSG:5186'),
        center: [200000, 600000],
        zoom: 2,
      }),
    });
  }
}