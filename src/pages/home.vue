<template>
  <div class="home-wrap">
    <head-area></head-area>
    <card-area></card-area>
    <foot-area></foot-area>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeadArea from '../components/headArea.vue';
import CardArea from '../components/cardArea.vue';
import FootArea from '../components/footArea.vue';

import "./home.less";
export default {
  name: "home",
  components: {
    HeadArea,
    CardArea,
    FootArea,
  },
}
</script>