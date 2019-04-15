<template>
  <div :class="`bubble-wrap ${ type === 'user' ? 'left' : 'right'}`">
    <div v-if="item.type === 'user'" class="user">{{ item.content }}</div>
    <div v-if="item.type === 'robot'" class="robot">
      <div v-if="item.content">{{ item.content }}</div>
      <div class="recommends" v-if="recommends.length > 0">
        <div class="recommend-list" v-for="(cItem, index) in recommends" :key="index" @click="clickAnswer(cItem)">
          {{index +1}}. {{ cItem }}
        </div>
      </div>
    </div>
    <div class="btns" v-if="btns.length > 0">
      <div class="btn-list" v-for="(cItem, index) in btns" :key="index" @click="clickAnswer(cItem)">
        {{ cItem }}
      </div>
    </div>
    <div class="goods" v-if="goods.length > 0">
      <div class="goods-list" v-for="(cItem, index) in goods" :key="index">
        <a :href="cItem.link">
        <div class="icon" :style="{backgroundImage: 'url(' + cItem.icon + ')'}"></div>
        <div class="desc">{{ cItem.title }}</div>
        </a>
      </div>
    </div>
    <div class="bills" v-if="bills.length > 0">
      <div class="bills-list" v-for="(cItem, index) in bills" :key="index">
        <a :href="cItem.link">
          <div class="icon" :style="{backgroundImage: 'url(' + cItem.icon + ')'}"></div>
          <div class="desc">
            <div class="title">{{ cItem.title }}</div>
            <div class="date">{{ cItem.date }}</div>
            <div class="cost">${{ cItem.cost }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapActions
  } from "vuex";
  
  export default {
    props: ["item"],
    data: function() {
      const {
        type = "robot",
          content = "",
          btns = [],
          recommends = [],
          goods = [],
          bills = []
      } = this.item;
      return {
        type,
        content,
        btns,
        recommends,
        goods,
        bills
      };
    },
    methods: {
      ...mapActions({
        chat: "chatStore/chat"
      }),
      clickAnswer(cItem){
        this.$store.commit("chatStore/chat", {
          content: cItem,
          type: "user"
        });
        this.chat(cItem);
      }
    },
    computed: {}
  };
</script>

<style lang="less">
  .bubble-wrap {
    display: flex;
    margin-bottom: 10px;
    color: #333;
    &.left {
      justify-content: flex-end;
    }
    &.right {
      flex-direction: column;
    }
    .robot {
      width: fit-content;
      padding: 5px 10px;
      margin-right: 50px;
      border: 1px solid rgba(20, 185, 199, 0.5);
      border-radius: 5px;
    }
    .user {
      justify-content: flex-end;
      padding: 5px 10px;
      margin-left: 50px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .recommend-list {
      margin-top: 8px;
      color: #14b9c7;
    }
    .btns,
    .goods {
      display: flex;
      overflow: auto;
      width: 100%;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .btn-list {
      margin: 10px 10px 0 0;
      padding: 5px 10px;
      border: 1px solid rgba(20, 185, 199, 0.5);
      border-radius: 20px;
      color: #666;
    }
    .goods-list {
      margin: 10px 10px 5px 5px;
      border-radius: 5px;
      border: 1px solid #14b9c7;
      &>a {
        display: block;
      }
      .icon {
        height: 40px;
        width: 60px;
        background: no-repeat center;
        background-size: cover;
      }
      .desc {
        text-align: center;
        font-size: 12px;
        color: #666;
        line-height: 1.5;
      }
    }
    .bills-list {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      &>a {
        display: flex;
      }
      .icon {
        width: 90px;
        height: 60px;
        margin-right: 10px;
        border-radius: 5px;
        background: no-repeat center;
        background-size: cover;
      }
      .desc {
        flex: 1;
      }
      .title {
        margin-bottom: 6px;
        font-weight: bold;
      }
      .date {
        margin-bottom: 10px;
        font-size: 12px;
        color: #666;
      }
      .cost {
        font-size: 14px;
        font-weight: bold;
        color: #14b9c7;
      }
    }
  }
</style>
