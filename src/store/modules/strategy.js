import ajax from '../../common/ajax';
import recommend from './recommend';

const state = {
  headline: '',
  list: [],
  loading: true,
}
const getters = {

}
const actions = {
  async strategy(context) {
    const res = await ajax('strategy.json');
    context.commit('strategy', res);
  },
  // switchShow(context, payload) {
  //   context.commit('switchShow', payload);
  // }

}
const mutations = {
  strategy(state, res = {}) {
    state.headline = res.headline;
    state.list = res.list;
    state.loading = false;
  },
  // switchShow(state, payload) {
  //   const {
  //     index = 0
  //   } = payload;
  //   const newState = state.list[index];
  //   console.log(newState, '0000')
  //   if (newState) {
  //     const { question = [] } = newState;
  //     if (question.length) {
  //       state.question = question;
  //     }
  //   }
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}