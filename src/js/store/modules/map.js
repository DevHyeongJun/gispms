import MainMap from '@/js/map/map';

export default {
    //하나의 store안에서 모듈화되어 사용될 수 있음을 명시
    namespaced : true,
    // 실제로 취급해야하는 각각의 data(==data)
    state: () => ({
      map: null
    }),

    // 계산된 상태를 만들어내는 개념(==computed)
    getters: {
        getMap(state) {
            return state.map;
        }
    },
    //✅mutations를 통에서만 데이터를 변경할 수 있습니다.
    mutations: {
        createMap(state, value) {
          state.map = MainMap.createMap(value);
        }
    },

     //actions의 함수들은 비동기로만 동작
    //✅async, await를 붙이지 않아도 비동기로만동작한다.
    actions: {
      createMap({ commit }, value) {    
        commit('createMap', value);
      }
    }
  }