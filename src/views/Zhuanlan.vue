<template>
  <div style="height:100%;background:#fbfbfb;">
    <zh_header/>
    <div style="text-align:center;">
      <el-button size="large" class="zh-rate-btn" href="javascript:;" @click="rateBtn">
            <span>
              <img src="@/assets/shuaxin.png" />
            </span>
        换一换
      </el-button>
    </div>
    <div class="zh-zhuanlan-main">
      <div class="zh-zhuanlan-cardList">
        <div class="zh-cardList-title">专栏·发现</div>
        <div class="zh-cardlist">
          <zh_usercard :datas="zhuanlanData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Zh_header from '../components/zh_header';
  import Zh_usercard from '../components/zh_usercard';
  export default {
    name: 'Zhuanlan',
    components: { Zh_usercard, Zh_header },
    data() {
      return {
        Data: [],
        zhuanlanData: [],
        index: 1
      };
    },
    created() {
      this.init();
    },
    methods:{
      async init() {
        /*userInfo*/
        const { data } = await this.$http.get('http://127.0.0.1:8899/');
        this.Data = data.Zldata;
        console.log(this.Data);
        let letdata = [];
        for (let i = 0; i < 8; i++) {
          letdata.push(data.Zldata[i]);
        }
        this.zhuanlanData = letdata;
      },
      rateBtn() {
        let Data = this.Data;
        let index = this.index++;
        let init = 8;
        let start = (index + 1) * init - init;
        let end = (index + 1) * init;
        if (end < Data.length) {
          let spliceData = Data.slice(start, end);
          this.zhuanlanData = spliceData;
        } else {
          this.index = 1;
        }
      }
    }
  };
</script>

<style lang="less">
  .zh-zhuanlan-main {
    width: 100%;
    background:#fbfbfb;

    .zh-zhuanlan-cardList {
      margin: 48px auto 0;
      width: 888px;
      .zh-cardList-title {
        text-align: center;
        color: #1a1a1a;
        font-size: 14px;
        line-height: 22px;
        margin: 16px;
        font-weight: 600;
        font-synthesis: style;
      }
    }
  }

  .zh-rate-btn {
    display: inline-block;
    text-align: center;
    line-height: 32px;
    border: 1px solid #666;
    color: #666;
    font-size: 14px;
    border-radius: 4px;
    padding: 0 16px;
    span {
      display: inline-flex;
      align-items: center;
      height: 100%;
      img {
        display: inline-block;
        height: 15px;
        width: 15px;
      }
    }
  }
</style>
