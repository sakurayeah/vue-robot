<template>
  <div>
    <!-- 四级  -->
    <div
      v-if="list.length > 0"
      class="list"
      v-for="item in list"
      :key="item.id"
    >
      {{ item.title }}
    </div>
    <div v-else>
      loading
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  created: function(){
    this.$store.dispatch('recommendStore/recommend')
  },
  computed: mapState({
    list: state => state.recommendStore.list
  }),
};
</script>