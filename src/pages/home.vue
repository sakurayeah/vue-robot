<template>
  <div class="home-wrap">
    <div class="header-area">
      <div class="greeting">Hi, {{ homeView.userName }}!</div>
      <div v-if="homeView.banner" class="banner" :style="{backgroundImage: 'url(' + homeView.banner + ')'}"></div>
    </div>
    
    <div class="card-area">
      <cards v-for="(item, key) in cardsList" :key="key" :uiTplType="item.uiTplType"></cards>
    </div>
    
    <div class="foot-area">
      <div class="foot-nav">
        <a>settings</a>
        <a>me</a>
        <a>help</a>
      </div>
      <div class="info">Email: o.ofdqbw@opmw.sn</div>
      <div class="info">Address: Box 564, Disneyland</div>
      <div class="copyright">
        <div class="hr"></div>
        <span class="copyright-text">©2019 robot-vue</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cards from "../components/cards.vue";

import "./home.less";
export default {
  mounted: function() {
    this.$store.dispatch("homeStore/homeInit");
  },
  computed: {
    ...mapState({
      cardsList: state => state.homeStore.cardsList,
      homeView: state => state.homeStore.homeView
    })
  },
  components: {
    Cards
  }
};
</script>