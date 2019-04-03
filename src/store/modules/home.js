import ajax from '../../common/ajax';

const state = {
  list: [],
}

const getters = {};

const actions = {
  async homeInit(context) {
    const res = await ajax('homeInit.json');
    context.commit('homeInit', res);
  }
}

const mutations = {
  homeInit(state, res = {}) {
    const { list = [] } = res;
    state.list = list;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
