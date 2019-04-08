import ajax from '../../common/ajax';

const state = {
  list: [],
  isLoading: true,
}

const getters = {};

const actions = {
  async tools(context) {
    const res = await ajax('tools.json');
    context.commit('tools', res);
  }
}

const mutations = {
  tools(state, res = {}) {
    const { list = [], headline = '', pageSize = 3, } = res;
    state.list = list;
    state.headline = headline;
    state.isLoading = false;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
