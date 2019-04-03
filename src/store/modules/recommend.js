import ajax from '../../common/ajax';

const state = {
  list: [],
  isLoading: true,
}

const getters = {};

const actions = {
  async recommend(context) {
    const res = await ajax('recommend.json');
    context.commit('recommend', res);
  }
}

const mutations = {
  recommend(state, res = {}) {
    const { list = [], headline = '', pageSize = 3, } = res;
    state.list = list;
    state.headline = headline;
    state.pageSize = pageSize;
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
