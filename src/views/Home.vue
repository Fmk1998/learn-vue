<template>
  <div class="home">
    <el-input v-model="form.username"></el-input>
    <el-button type="primary" @click="handlerClick($event)">
      <slot></slot>
      Click Me
    </el-button>
    <el-card class="box-card" v-for="item in list" :key="item.label">
      <div slot="header" class="clearfix">
        <span>{{item.label}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      {{item.value}}
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {},
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        list:[]
      };
    },
    created() {
      this.init();
    },
    methods: {
      async init() {
        /*对象{key：value}*/
        const { data } = await this.$http.get('https://api.myjson.com/bins/sdmc4');
        this.list = data.data;
        this.form.username = 'fuminkang';
      },
      // watchCurrentFunc(...arg) {
      //   console.log(args);
      // },
      handlerClick() {
        // 判断语句
        if (this.form.username === '' || this.form.password === '') {
          this.$message.warning('用户名/密码不能为空');
        }
        // 业务逻辑
        // UE => button(LOADING) => FETCH =>
        // this.btnLoading = true;
        // await this.$http.post({
        //   url:'',
        //   data:this.form
        // });
        // this.$message.SUCCESS()
        // this.btnLoading = false
        console.log(this.form);
      }

    }
  };
</script>
