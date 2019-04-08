import Vue from 'vue';
import vuex from 'vuex';
import homeStore from './modules/home';
import chatStore from './modules/chat';
import recommendStore from './modules/recommend';
import toolsStore from './modules/tools';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    homeStore,
    chatStore,
    recommendStore,
    toolsStore,
  },
})