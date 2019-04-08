import ajax from '../../common/ajax';

const state = {
  cardsList: [],
  homeView: {},
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
    const { cardsList = [], homeView = {} } = res;
    state.cardsList = cardsList;
    state.homeView = homeView;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
