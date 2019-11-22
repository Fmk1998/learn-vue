<template>
  <div class="login-container">
    <div class="login_el_form" align="center">
      <div class="SignFlowHomepage-content">
        <img class="SignFlowHomepage-logo" src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"/>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login_ruleForm">
        <el-tabs >
          <el-tab-pane>
            <span slot="label"><i class="el-icon-link"></i> 密码登录</span>
            <el-form-item label="用 户 名" prop="user" class="login_input">
              <el-input v-model="ruleForm.user" placeholder="请输入你的用户名"></el-input>
            </el-form-item>
            <el-form-item label="密     码" prop="pass" class="login_input">
              <el-input  type="password" v-model="ruleForm.pass" placeholder="请输入你的密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" class="login_input">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <div>
              <el-button type="primary" @click="submitForm('ruleForm')" class="Button SignFlow-submitButton Button--primary Button--blue">提交</el-button>
            </div>
            <div>
              <el-button @click="resetForm('ruleForm')" class="Button SignFlow-submitButton Button--primary Button--blue">重置</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-camera"></i> 扫码登录</span>
            <div class="Qrcode-title">扫码登录</div>
            <div style="height: 200px"><img width="150" height="150" src="../assets/zh_erweima.png" alt="二维码"></div>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      var checkUser = (rule, value, callback) => {
        if (value === '') {
           callback(new Error('用户名不能为空'));
        } else {
          if (this.ruleForm.user !== '') {
            this.$refs.ruleForm.validateField('checkUser');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          user: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          user: [
            { validator: checkUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$alert('欢迎登录');
            this.$router.push({path:'/home'});
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less">
  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  }
  .login_ruleForm {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: white;

  }
  .login_input{
    width: 100%;
    margin: 0px auto 50px auto;
  }
  .login_el_form{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .SignFlowHomepage-logo{
    width: 128px;
    height: 81px;
    margin-bottom: 24px;
  }
  .SignFlowHomepage-content{
    width: 100%;
    margin: 0px auto 0px auto;
  }
  .login_header{
    width: 100px;
  }
  .Button--primary.Button--blue {
    color: #fff;
    background-color: #0084ff;
  }
  .SignFlow-submitButton {
    width: 100%;
    height: 36px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .Qrcode-title {
    font-size: 24px;
    color: #1a1a1a;
    line-height: 33px;
    margin-bottom: 50px;
    margin-top: 3px;
  }
</style>
