<template>
  <loading v-if="isLoading"></loading>
  <!-- recommend  -->
  <div v-else-if="list.length > 0" class="recommend-wrap">
    <card-title 
      :headline="headline" 
      :btn="list.length > 6 && 'change'"
      @btnClick="changePage"
    ></card-title>
    <div class="list" v-for="item in listGroup" :key="item.id">
      <a :href="item.link">{{ item.title }}</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CardTitle from "./cardTitle.vue";
import Loading from "./loading.vue";

export default {
  data() {
    return {
      current: 1
    };
  },
  created: function() {
    this.$store.dispatch("recommendStore/recommend");
  },
  methods: {
    changePage() {
      const maxPage = Math.ceil(this.list.length / this.pageSize);
      const current = this.current;
      let newCurrent = 1;
      if (current < maxPage) {
        newCurrent = current + 1;
      }
      this.current = newCurrent;
    }
  },
  computed: {
    ...mapState({
      list: state => state.recommendStore.list,
      headline: state => state.recommendStore.headline,
      pageSize: state => state.recommendStore.pageSize,
      isLoading: state => state.recommendStore.isLoading,
    }),
    listGroup() {
      return this.list.slice(
        (this.current - 1) * this.pageSize,
        this.current * this.pageSize
      );
    }
  },
  components: {
    Loading,
    CardTitle,
  }
};
</script>

<style lang="less">
.recommend-wrap {
  .list {
    border-bottom: 1px solid #ddd;
    height: 32px;
    line-height: 32px;
    color: #333;
  }
}
</style>
