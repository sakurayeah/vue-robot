<template>
  <div class="card-head">
    <span>{{ headline }}</span>
    <span @click="$emit('btnClick')" v-show="btn">{{ btn }}</span>
  </div>
</template>

<script>
import './cardTitle.less';

export default {
  props: ['headline', 'btnClick', 'btn'],
};
</script>