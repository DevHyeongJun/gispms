<!-- 전체 페이지..! -->

<template>
    <div class="wrap">
        <div class="top_menu">
            <TopMenu></TopMenu>
        </div>
        <div class="main">
            <div id="main_map"></div>
            <!-- 컴포넌트 분리 -->
            <Panel class="left_panel" header="프로젝트 리스트"  :toggleable="true" :collapsed="false" >
                <ProjListPage></ProjListPage>
            </Panel>
            <!-- 컴포넌트 분리 -->
            <Panel class="right_panel" header="진행 상황"  :toggleable="true" :collapsed="false" >
                <CurrentPage></CurrentPage>
            </Panel>
        </div>
    </div>
</template>

<script>

import Panel from 'primevue/panel';

import TopMenu from '@/components/layout/menu/TopMenu.vue';
import CurrentPage from '@/components/layout/panel/CurrentPage.vue';
import ProjListPage from '@/components/layout/panel/ProjListPage.vue';

export default {
    name: 'MainWrap',
    components: {
        TopMenu,
        Panel,
        ProjListPage,
        CurrentPage,
    },
    data() {
         
         return {
            searchTxt : this.$store.getters['search/getSearchTXT']
         }
    },

    mounted() {
        this.$store.dispatch('map/createMap', 'main_map');
    },
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
        background:#009688;
        font-size:14px;
        flex:none;
        line-height: 79px;
        padding-left: 10px;
        border-bottom:1px solid #777;
    }

    .main {
        position: relative;
    }

    .main > .left_panel {
        position: absolute;
        left:10px;
        top:20px;
        width:600px;
    }
    .main > .right_panel {
        position: absolute;
        right:10px;
        top:20px;
        width:600px;
    }

    #main_map {
        width:100%;
        height:100%
    }
    
  

</style>
