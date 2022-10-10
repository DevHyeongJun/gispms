<!-- 전체 페이지..! -->

<template>
    <div class="menu">
        <div>
            <h2>GIS 프로젝트 매니져</h2>
            
            <!-- 추후 필요 시 추가 - 메뉴 객체는 MainWrap에서 선언~~ -->
            <div class="menu_list"></div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'TopMenu',
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */
    .menu > div {
        display: flex;
        justify-content: space-between;
    }
</style>