<template>
  <loading v-if="loading"></loading>
  <div v-else-if="list.length > 0" class="strategy-wrap">
    <card-title :headline="headline"></card-title>
    <div class="tabs-nav">
      <div
        class="tab"
        v-for="(item,index) in list"
        :key="index"
        v-bind:class="{active:index==current}"
        @click="switchShow(index, $event)"
      >{{item.title}}<b></b></div>
    </div>
    <div v-if="newState.length">
      <div class="list" v-for="(cItem,index) in newState" :key="index">{{cItem.subTitle}}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import CardTitle from "./cardTitle.vue";
import Loading from "./loading.vue";

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
      headline: state => state.strategyStore.headline,
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

<style lang="less">
.strategy-wrap {
  .tabs-nav {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom: 1px dashed #ddd;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    .tab {
      position: relative;
      padding: 10px;
      font-size: 18px;
      width: fit-content;
      white-space: nowrap;
      &>b {
        position: absolute;
        left: 0;
        bottom: -1px;
        display: block;
        width: 100%;
        height: 2px;
      }
    }
  }
  .list {
    border-bottom: 1px solid #ddd;
    height: 32px;
    line-height: 32px;
  }
  .active {
    color: #14b9c7;
    &>b {
      background: #14b9c7;
    }
  }
}
</style>