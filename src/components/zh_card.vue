<template>
  <div class="zh_card">
    <el-card class="box-card" v-for="item in list" :key="item.title">
      <div slot="header" class="card_title">
        <h3>{{item.title}}</h3>
      </div>
      <div>
        <div class="card_content">
          {{item.content}}
        </div>
        <img class="card_img" :src="item.image_url" alt/>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'zh_card',
    data() {
      return {
        list: []
      };
    },
    created() {
      this.init();
    },
    methods: {
      //做深度回调
      async init() {
        /*userInfo*/
        const { data } = await this.$http.get('http://127.0.0.1:8899/');
        this.list = data.CardList;
      },
    }
  };
</script>

<style lang="less">
  .zh_card {
    width: 70%;
    margin: 0px 150px 0px 150px;
    border: 1px #1a1a1a;
  }

  .card_img {

    float: right;
    height: 140px;
    width: 190px;
    background-color: #eee;
    border-radius: 10px;
  }

  .card_content {
    float: left;
    width: 70%;
  }

  .card_title {
    height: 30px;
  }

  .box-card {
    cursor: pointer;
    margin: 10px 0px 0px 0px;
    border-radius: 10px;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    font-size: 15px;
    color: #1a1a1a;
    background: #f6f6f6;
    -webkit-tap-highlight-color: rgba(26, 26, 26, 0);
  }

</style>
