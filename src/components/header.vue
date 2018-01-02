<template>
    <div class="header">
        <header>
            <div class="logoArea">
                <router-link class="link logo" to="/">知乎</router-link>
            </div>
            <div class="linkDiv">  
                <router-link class="link homepage" to="/">首页</router-link> 
                <router-link class="link discovery" to="/discovery/">发现</router-link> 
                <router-link class="link topic" to="/topic/">话题</router-link>
            </div>
            <div class="inputArea">
                <input ref="searchInput" placeholder="搜索你感兴趣的内容..." />
                <button class="submitButton">提问</button>
            </div>
    </header>
</div>
</template>
<script>
export default {
  name: 'myHeader'
}
</script>
<style lang="less" scoped>
  .logoArea,
  .linkDiv,
  .inputArea {
      display:inline-flex;
      align-items:flex-start;
      
  }
  .link {
    text-decoration: none;
    &:link
    &:hover,
    &:focus,
    &:active,
    &:visited,
     {
      color:rgb(9, 128, 226);
      
    }

  }
  form {
      flex:4 1 auto;
  }

  .logoArea,
  .linkDiv {
      flex:1 1 auto;
      align-content:center;
      justify-content: space-around;
      .logo {
          color:rgb(9, 128, 226);
          font-size:1.2rem;
          font-weight:bold;
          line-height:1.2rem;
      }
  }
  .link {
      flex:0 0 auto;
      padding-left:5px;
  }


  .logoArea {
      flex:0 1 auto;
  }

  .inputArea {
      flex:2 1 auto;
      align-items:center;
      align-content:center;
      
          input {
              flex:1 1 auto;
              background: #f3f3f3;
              height:30px;
              line-height: 30px;
              border:none;
              outline:none;
              resize:none;
              border-radius:3px;
          }
          button {
              display: inline-block;
              text-align:center;
              flex:0 0 40px;
              height:30px;
              border-radius:3px;
              background-color:rgb(9, 128, 226);
              border: 1px solid #0f88eb;
              color:#fff;
              
          }
  }

  header {
      display:flex;
      align-content:space-between;
      align-items:center;
      white-space:nowrap; 
      width:900px;
      height:100%;
      margin:0 auto;
      background:inherit;
  }

  .header {
      position:fixed;
      background:rgb(255, 255, 255);
      width:100%;
      height:50px;
      top:0;
      left:0;
      z-index:1000;
  }
</style>
