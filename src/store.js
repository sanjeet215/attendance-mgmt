import Vue from 'vue'
import Vuex from 'vuex'
//import { alert } from './_store/alert.module';
// import { account } from './_store/account.module';
//import { users } from './_store/users.module';
// import { auth } from '../store/auth.module';
import { auth } from './store/auth.module';

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false
  // role: [],
  // token: 'user token read',
  // userid: ''
}

const mutations = {
  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set(state, [variable, value]) {
    state[variable] = value
  }

  // updateToken (state,token)  {
  //   state.token = token;
  // }

}

const actions = {
  updateToken (context,token)  {
    context.commit('updateToken',token)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    //alert,
    auth
    //users
  }
})