<template>
  <div class="main">
    <div class="registerCard">
      <div class="titleArea">
        <h2>知乎</h2>
        <h4>
          {{isRegistered ? '登录' : '注册'}}知乎，发现更大的世界
        </h4>   
      </div>
      <form>
        <div class="accountInputArea">
            <select v-if="!isRegistered" class="locationSelect">
              <option>中国+86</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>   
            </select>  
            <span v-if="!isRegistered">  | </span>
          <mt-field type="text" 
            class="accountInput"
            :placeholder='isRegistered ? "手机号或邮箱" : "手机号"' 
            v-model="username" disableClear>
          </mt-field>
        </div>
        <hr>
        <div class="passwordInputArea">
          <mt-field :type="isRegistered ? 'password' : 'text'" 
            class="passwordInput"
            :placeholder='isRegistered ? "密码" : "输入6位短信验证码"'  v-model="password" disableClear></mt-field>
          <a v-if="!isRegistered" class="msgAcquire">
            获取短信验证码
          </a>
        </div>   
        <hr>
        <div v-if="isRegistered" class="loginOption">
          <a class="mobileCodeLogin">手机验证码登录</a>
          <a class="forgetPassword">忘记密码？</a>
        </div>
          <button class="loginButton" to="/">
          {{isRegistered ? '登录' : '注册'}}
          </button> 
      </form>
      <div v-if="isRegistered" class="loginPattern">
        <a class="twoCodeLogin">二维码登录</a>
        <span> 丶 </span>
        <a class="aboardMobileLogin">海外手机登录</a>
        <span> 丶 </span>
        <a class="socialLogin">社交帐号登录</a>
      </div>
      <div v-else class="registerPattern">
        <a class="zhihuProtocol">
          注册即代表你同意《知乎协议》
        </a>
        <a class="registerOrga">
          注册机构号
        </a>
      </div>
    </div>
    <div class="switchArea">
      <span>
        {{isRegistered ? '没有帐号？' : '已有帐号？'}}
        <a @click="registerToggle" >
          {{isRegistered ? '注册' : '登录'}}
        </a>  
      </span>
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
      loginText: '没有帐号',
      isRegistered: true
    }
  },
  methods: {
    registerToggle () {
      this.isRegistered = !this.isRegistered
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
  font-size:14px;
  width:100%;
  height:700px;
  padding:150px 0;
  background: 
  url('../static/image/pics/registerBackground.png') round;
  
}
.registerCard {
  text-align:center;
  width:432px;
  height:450px;
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
    margin-bottom:15px;

  }
  h4 {
    font-size:20px;
    margin-bottom:20px;
  }
  .loginOption {
    display: flex;
    justify-content: space-between;
    width:100%;
    .mobileCodeLogin,
    .forgetPassword {
      flex:0 1 auto;

    }

  }
  .loginButton {
    display: block;
    margin:0 auto;
    color:#fff;
    width:100%;
    height:40px;
    background: #0f88eb;
    border:1px solid #0f88eb;
    border-radius:3px;
    margin:15px 0;
  }

  form {
    text-align:justify;
    padding:0 20px;
    line-height:20px;
    white-space: nowrap;
    .accountInputArea,
    .passwordInputArea {
      font-size:20px;
      display: flex;
      width:100%;
      align-items: center;
      .accountInput,
      .passwordInput {
        flex:2 0 auto;
        font-size:20px;
      }
      span {
        margin:0 10px 3px ;
        
        line-height:20px;
        color:#8590a6;
        opacity: 0.4;
      }
      .accountInput,
      .passwordInput {
        margin-left:-10px;
        appearance: none; // 这里需要更好的方案，来取消Mint库中的默认样式。
      }
      .locationSelect {
        color:#888;
        margin-top:-1px;
        
      }
      .locationSelect,
      .msgAcquire {
        display:inline;
        font-size:16px;
        flex:0 0 20%;
        border:none;
        cursor: pointer;
        appearance: none;
      }
      
      
    }
    mt-field {
      margin-bottom:15px; 
    }
    
    hr {
      margin-bottom: 15px;
    }
  }
}

.loginPattern {
  color: #8590a6;
}

.registerPattern {
  display: flex;
  padding:0 20px;
  justify-content: space-between;
  color: #8590a6;
  .zhihuProtocol,
  .registerOrga {
    flex:0 0 auto;
  }
}
    
.switchArea {
    background-color:#f7f8fa;
    width:432px;
    padding:20px 0;
    height:19px;
    font-size:17px;
    line-height:20px;
    border-top: 1px solid #e7eaf1;
    margin:0 auto;
    text-align:center;  
    a {
      color:#175199;
      cursor: pointer;
      text-decoration: none;
      &:link,
      &:visited {
        color:inherit;
      }
    } 
  }
</style>
