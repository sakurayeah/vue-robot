<template>
  <loading v-if="isLoading"></loading>
  <div v-else-if="list.length > 0" class="tools-wrap">
    <card-title 
      :headline="headline" 
      btn="more"
      @btnClick="moreClick"
    ></card-title>
    <div class="list" v-for="item in list" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CardTitle from "./cardTitle.vue";
import Loading from "./loading.vue";

export default {
  created: function() {
    this.$store.dispatch("toolsStore/tools");
  },
  methods: {
    moreClick() {
      window.location.href = 'http://www.baidu.com'
    }
  },
  computed: {
    ...mapState({
      list: state => state.toolsStore.list,
      headline: state => state.toolsStore.headline,
      isLoading: state => state.toolsStore.isLoading,
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
