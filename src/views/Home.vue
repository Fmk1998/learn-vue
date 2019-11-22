<template>
  <div style="height:100%;background:#fbfbfb;">
    <zh_header/>
    <zh_card/>
  </div>
</template>

<script>
  import Zh_header from '../components/zh_header';
  import Zh_card from '../components/zh_card';


  export default {
    name: 'card',
    components: { Zh_card, Zh_header }
    // data() {
    //   return {
    //     list:[]
    //   };
    // },
    // created() {
    //   this.init();
    // },
    // methods: {
    //   //做深度回调
    //   async init() {
    //     /*userInfo*/
    //     const { data } = await this.$http.get('http://127.0.0.1:8888/');
    //     this.list = data.data;
    //   },
    // watchCurrentFunc(...arg) {
    //   console.log(args);
    // },
    // handlerClick() {
    //   // 判断语句
    //   if (this.form.username === '' || this.form.password === '') {
    //     this.$message.warning('用户名/密码不能为空');
    //   }
    //   业务逻辑
    //   UE => button(LOADING) => FETCH =>
    //   this.btnLoading = true;
    //   await this.$http.post({
    //     url:'',
    //     data:this.form
    //   });
    //   this.$message.SUCCESS()
    //   this.btnLoading = false
    //   console.log(this.form);
    // }

    // }
  };
</script>
<style lang="less">

</style>
