<template>

    <div class="ol-map">
        <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:100%">

            <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" :projection="projection" />

            <ol-tile-layer>
                <ol-source-osm />
            </ol-tile-layer>
        </ol-map>
    </div>
   
</template>

<script>
import {
    ref
} from 'vue'
import 'ol/ol.css';
//선언된 건 template 무조건 사용해야 하나봄??
export default {
    setup() {
        const center = ref([127, 37])
        const projection = ref('EPSG:4326')
        const zoom = ref(8)
        const rotation = ref(0)
        return {
            center,
            projection,
            zoom,
            rotation
        }
    },
    name: 'OLMap',
    components: {}, 
};

</script>

<style scoped>
    .ol-map {
        width:100%;
        height:100%;
    }
</style>