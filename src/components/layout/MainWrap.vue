<!-- 전체 페이지..! -->

<template>
    <div class="wrap">
        <div class="top_menu">
            <TopMenu></TopMenu>
        </div>
        <div class="main">
            <MapObject :map="map"></MapObject>
        </div>
    </div>
</template>

<script>
import MapObject from '@/components/map/MapObject.vue';
import TopMenu from '@/components/layout/menu/TopMenu.vue';

//선언된 건 template 무조건 사용해야 하나봄??
export default {
	name: 'MainWrap',
    components: {
        TopMenu,
        MapObject
    },
    data() {
       return {
        map: null
      }
    }
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */

    .wrap {
        display: flex;
        flex-direction: column;
        height:100%;
        width: 100%;
    }
    
    .wrap > div {
        flex:1;
        overflow: auto;
    }

    .wrap > .top_menu {
        height:80px;
        flex:none;
        line-height: 80px;
        padding-left: 10px;
        border-bottom:1px solid #777;
    }

</style>