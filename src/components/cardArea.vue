<template>
  <div>
    <!-- 四级  -->
    <recommend></recommend>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Recommend from './recommend.vue';

export default {
  created: function(){
    this.$store.dispatch('homeStore/homeInit')
  },
  computed: mapState({
    list: state => state.homeStore.list
  }),
  components: {
    Recommend,
  },
};
</script>