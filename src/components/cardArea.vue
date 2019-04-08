<template>
  <div>
    <!-- recommend  -->
    <recommend></recommend>
    <!--strategy -->
    <strategy></strategy>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Recommend from "./recommend.vue";
import Strategy from "./strategy.vue";

export default {
  created: function() {
    this.$store.dispatch("homeStore/homeInit");
  },
  computed: mapState({
    list: state => state.homeStore.list
  }),
  components: {
    Recommend,
    Strategy
  }
};
</script>