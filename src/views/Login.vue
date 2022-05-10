<template>
  <div class="main">
      <div class="loginbox">
        <div>
          <el-image :src='require("@/assets/img/login-button.png")' fit='fill'></el-image>
        </div>
        <div style="position: absolute;right: 200px;top: 200px;">
          <div style="font-size: 24px;font-weight: bold;margin-bottom: 20px;">欢迎登录</div>
          <el-form class="fom">
            <el-form-item>
              <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" class="mb10 int" v-model="user" @keyup.enter.native="login"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" class="mb10 int" v-model="pass" @keyup.enter.native="login"></el-input>
            </el-form-item>
          </el-form>
          <div style="margin-top:50px;">
            <el-button type="primary" class="btn" @click="login()">登录</el-button>
          </div>
        </div>
      </div>
  </div>
</template>
;
<script>
export default {
  data(){
    return{
      user:"user1",
      pass:"123456",
      userList: [
        {
          id: '1',
          userName: 'user1',
          password: '123456'
        },{
          id: '2',
          userName: 'user2',
          password: '123456'
        }
      ]
    }
  },
  created(){
    // console.log(window.userId)
  },
  methods:{
    login(){
      let isLogin = false;
      for(let user of this.userList){
        if(user.userName == this.user && user.password == this.pass){
          window.sessionStorage.setItem('user', user.id);
          this.$router.push('/index')
          isLogin = true;
          return;
        }
      }
      if (!isLogin){
        this.$message.error('用户名或密码错误');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.main{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background:url('../assets/img/bg.png')  no-repeat center;
  background-size: 100% 100%;
  .loginbox{
    padding:40px;
    position: relative;
    display: flex;
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mange{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      margin:25px 0;
    }
    .fom{
      width: 300px;
      .int{
        border-radius:20px ;
      }
    }
    .btn{
      width: 300px;
    }
    /deep/.el-input__inner{
      width: 300px;
    }
    /deep/.el-form-item:not(:first-child){
      margin-top: 25px;
    }
  }
}
</style>
