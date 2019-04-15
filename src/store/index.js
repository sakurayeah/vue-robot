import Vue from 'vue';
import vuex from 'vuex';
import homeStore from './modules/home';
import chatStore from './modules/chat';
import recommendStore from './modules/recommend';
import strategyStore from './modules/strategy';
import toolsStore from './modules/tools';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    homeStore,
    chatStore,
    recommendStore,
    strategyStore,
    toolsStore,
  },
})