<template>
    <div ref="map" class="map"></div>
</template>

<script>
import View from 'ol/View';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import 'ol/ol.css';
//선언된 건 template 무조건 사용해야 하나봄??
export default {
	name: 'MapObject',
  components: {},
  props: {
    map : {
      type : Object
    }
  },
  mounted() {
    //마운트 시 객체 생성
    //전체 변수에 담는 방안 구상 해야 할 듯?
    new Map({
      target: this.$refs['map'],
      layers: [
        new TileLayer({
          source: new OSM() 
        }),
      ],
      // the map view will initially show the whole world
      view: new View({
        zoom: 0,
        center: [0, 0],
        constrainResolution: true
      }),
    })
  },
};
</script>

<style scoped>
    .map {
        width:100%;
        height:100%;
    }
</style>