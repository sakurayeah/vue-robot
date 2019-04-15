<template>
  <div class="chat-wrap">
    <div class="content" ref="content">
      <bubbles v-for="(item, index) in answerList" :key="index" :item="item"></bubbles>
    </div>
    <div class="ipt-box">
      <input v-model="question">
      <button @click="send">发送</button>
    </div>
  </div>
</template>

<script>
import "./chat.less";
import { mapState, mapActions } from "vuex";
import Bubbles from "../components/bubbles.vue";

export default {
  name: "chat",
  mounted: function() {
    this.$store.dispatch("chatStore/chatInit");
  },
  updated: function() {
    this.$nextTick(function(){
      const target = this.$refs.content;
      target.scrollTop = target.scrollHeight;
    })
  },
  data: function() {
    return {
      question: ""
    };
  },
  computed: mapState({
    answerList: state => state.chatStore.answerList
  }),
  methods: {
    ...mapActions({
      chat: "chatStore/chat"
    }),
    send: function() {
      if (this.question) {
        this.$store.commit("chatStore/chat", {
          content: this.question,
          type: "user"
        });
        this.chat(this.question);
        this.question = "";
      }
    }
  },
  destroyed: function() {
    this.$store.commit("chatStore/ruin")
  },
  components: {
    Bubbles
  }
};
</script>
