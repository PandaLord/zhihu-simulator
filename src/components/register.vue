<template>
  <div class="main">
    <div class="registerCard">
      <div class="titleArea">
        <h2>知乎</h2>
        <h4>登录知乎，发现更大的世界</h4>
      </div>
      <form>
        <mt-field placeholder="手机号或邮箱" v-model="username"></mt-field>
        <mt-field placeholder="密码" v-model="password"></mt-field>
        <div>
          <a class="mobileCodeLogin">手机验证码登录</a>
          <a class="forgetPassword">忘记密码？</a>
          <button class="loginButton" to="/home">登录</button>
        </div>
        
      </form>
      <div class="loginPattern">
        <a class="twoCodeLogin">二维码登录</a>
        <a class="aboardMobileLogin">海外手机登录</a>
        <a class="socialLogin">社交帐号登录</a>
      </div>
      <div class="switchArea">
        <a>{{this.loginText}}</a>     
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      loginText: ''
    }
  }
}
</script>
<style lang="less" scoped>
* {
  padding:0;
  margin:0;
}

.main {
  font-size:20px;
  width:100%;
  height:500px;
  padding:150px 0;
  background-image: url('../static/image/pics/registerBackground.png');
}
.registerCard {
  text-align:center;
  width:432px;
  height:500px;
  padding:20px;
  background-color:#fff;
  color:#2d84cc;
  margin: auto;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  box-sizing: border-box;

  h2 {
    font-size:70px;
    font-weight:500;

  }
  .loginButton {
    display: block;
    margin:0 auto;
    color:#fff;
    width:100%;
    height:40px;
    background-color:#2d84cc;
    margin:15px 0;
  }
  form {
    text-align:justify;
  }
  
}
</style>
