import ajax from '../../common/ajax';

const state = {
  show: true,
  list: [],
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
