<!-- 전체 페이지..! -->

<template>
    <div class="menu">
        <div>
            <h2>AP 개발팀 의사결정 서비스</h2>
            <!-- 추후 필요 시 추가 - 메뉴 객체는 MainWrap에서 선언~~ -->
            <div class="menu_list">
            </div>
        </div>
    </div>
</template>

<script>

export default {
	name: 'TopMenu',
    components : {
    }
};
</script>

<style scoped> /* 이 파일에만 적용되는 스타일 */

    .menu > div {
        display: flex;
        padding:0;
        color:#fff;
        justify-content: space-between;
    }
</style>