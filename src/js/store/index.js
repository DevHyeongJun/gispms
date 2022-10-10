import { creatStore } from 'vuex';
import map from './modules/map';

export default creatStore({
  modules: {
    map
  }
});

