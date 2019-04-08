<template>
  <div class="strategy-wrap">
    <div v-if="title">
      <card-title :headline="title"></card-title>
    </div>
    <div v-if="loading">
      <loading></loading>
    </div>
    <div v-if="list.length">
      <div class="title">
        <div
          class="title-item"
          v-for="(item,index) in list"
          :key="index"
          v-bind:class="{active:index==current}"
          @click="switchShow(index, $event)"
        >{{item.listTitle}}</div>
      </div>
      <div v-if="newState.length">
        <div class="list" v-for="(item,index) in newState" :key="index">{{item.listTitle}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import CardTitle from "./cardTitle.vue";
import Loading from "./loading.vue";
import "./strategy.less";
export default {
  data() {
    return {
      current: 0,
      activeIndex: 0
    };
  },
  created() {
    this.$store.dispatch("strategyStore/strategy");
  },
  methods: {
    switchShow(index, event) {
      const target = event.currentTarget;
      this.current = index;
      // this.$store.dispatch("strategyStore/switchShow", index);
    }
  },
  computed: {
    ...mapState({
      list: state => state.strategyStore.list,
      title: state => state.strategyStore.title,
      loading: state => state.strategyStore.loading
    }),
    newState() {
      const newList = this.list[this.current];
      let question = [];
      if (newList) {
        question = newList.question;
      }
      return question;
    }
  },
  components: {
    CardTitle,
    Loading
  }
};
</script>
