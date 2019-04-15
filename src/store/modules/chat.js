import ajax from '../../common/ajax';

const state = {
  chartView: {},
  answerList: [],
}

const getters = {};

const actions = {
  async chatInit(context, question = '') {
    const res = await ajax('chatInit.json', { data: question });
    context.commit('chatInit', res);
  },
  async chat(context,  question = '') {
    const res = await ajax('chat.json', { data: question });
    const { content = '', btns = [], recommends = [], goods = [], bills = []} = res;
    context.commit('chat', {
      type: 'robot',
      content,
      btns,
      recommends,
      goods,
      bills,
    });
  }
}

const mutations = {
  chatInit(state, res = {}) {
    const { chartView = {} } = res;
    const { welcome = '' } = chartView;
    if (welcome) {
      state.answerList.push({
        type: 'robot',
        content: welcome,
      });
    }
    state.chartView = chartView;
  },
  chat(state, params = {}) {
    state.answerList.push(params);
  },
  ruin(state) {
    state.answerList = [];
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
