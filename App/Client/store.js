import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


var store = new Vuex.Store({
  state: {
    username: '',
    userinfo: '',
    name: '',
    age: '',
    location: '',
    profileImg: '',
    gender: ''
  },
  getters: {
    isUsername(state, name) {
      return state.username = name;
    }
  },
  mutations: {
    setUser (state, {
    username,
    userinfo,
    name,
    age,
    location,
    profileImg,
    gender
  }) {
      state.age = age; state.name = name; state.username = username; state.location = location; state.userinfo = userinfo;
    }
  }
  // action: {
  //   setName ({commit}, name) {
  //     commit(set_Name, name);
  //   }
  // }
});



export default store;