import Vue from 'vue';
import vuex from 'vuex';
import homeStore from './modules/home';
import chatStore from './modules/chat';
import recommendStore from './modules/recommend';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    homeStore,
    chatStore,
    recommendStore,
  },
})