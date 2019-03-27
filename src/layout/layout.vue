<template>
  <div>
    <div class="layout-wrap">
      <div>{{title}}</div>
      <div>
        <router-link to="/">home</router-link>
        <router-link to="/chat">chat</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "./layout.less";

export default {
  data() {
    return {
      title: "title bar"
    };
  }
};
</script>