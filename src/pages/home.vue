<template>
  <div class="home-wrap">
    <div class="header-area">Dear {{ homeView.userName }}，good morning!</div>
    <div class="card-area">
      <cards v-for="(item, key) in cardsList" :key="key" :uiTplType="item.uiTplType"></cards>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cards from "../components/cards.vue";

import "./home.less";
export default {
  created: function() {
    this.$store.dispatch("homeStore/homeInit");
  },
  computed: {
    ...mapState({
      cardsList: state => state.homeStore.cardsList,
      homeView: state => state.homeStore.homeView,
    })
  },
  components: {
    Cards
  }
};
</script>