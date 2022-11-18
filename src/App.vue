
<template>
  <MainWrap></MainWrap>
</template>

<script>

import MainWrap from '@/components/layout/MainWrap.vue';
import  '@/assets/css/reset.css'; //전역 CSS 설정
import  '@/assets/css/vue-theme.css'; //전역 CSS 설정


import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';                           //icons

export default {
  name: 'App',
  components: {
    MainWrap
  },
  data() {
    return {};
  },
};

</script>

<style>
  /* 스타일 설정 금지..! */
  #app{
    height:100%;
    width:100%;
  }
</style>