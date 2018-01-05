<template>
  <div class="viewport">
    <myHeader></myHeader>
    <div class="contentArea">
      <div v-if="!dataReceived" class="noContentArea">
        <h3 class="loading">
          正在加载，请稍后...
        </h3>
      </div>
      <div v-else class="leftContentArea">
        <content-card
        v-for="(user,index) in userData"
        :key="index"
        :data="user">
        </content-card>
      </div>
      <div class="rightContentArea">
        <div class="storySideBar">
          <ul class="storySideBar-List">
            <li class="storySideBar-ListItem">
              <span class="storySideBar-ListItem-Icon">
                <img src="../static/image/icons/lightning.png" /> 
              </span>
              <span class="storySideBar-ListItem-Anchor-Live">Live</span>
            </li>
            <li class="storySideBar-ListItem">
              <span class="storySideBar-ListItem-Icon">
                <img src="../static/image/icons/bookstore.png"/> 
              </span>
              <span class="storySideBar-ListItem-Anchor-Store">书店</span>
            </li>
            <li class="storySideBar-ListItem">
              <span class="storySideBar-ListItem-Icon">
                <img src="../static/image/icons/table.png" /> 
              </span>
              <span class="storySideBar-ListItem-Anchor-Table">圆桌</span>
            </li>
          </ul>
          <ul class="storySideBar-List">
            <li class="storySideBar-ListItem">
              <span class="storySideBar-ListItem-Icon">
                <img src="../static/image/icons/pen.png" /> 
              </span>
              <span class="storySideBar-ListItem-Anchor-Zhuanlan">专栏</span>
            </li>
            <li class="storySideBar-ListItem">
              <span class="storySideBar-ListItem-Icon">
                <img src="../static/image/icons/consult.png"/> 
              </span>
              <span class="storySideBar-ListItem-Anchor-Consult">咨询</span>
            </li>
          </ul>
        </div>
        <div class="personalInfo">
          <ul class="personalInfo-List">
            <mt-cell title="我的收藏" class="personalInfo-ListItem" to="http://www.baidu.com" >
              <img slot="icon" src="../static/image/icons/collect.png" />
              <span>123</span>
            </mt-cell>
            <mt-cell title="我关注的问题" class="personalInfo-ListItem" to="http://www.baidu.com" >
              <img slot="icon" src="../static/image/icons/attention.png" />
              <span>141</span>
            </mt-cell>
            <mt-cell title="我的邀请" class="personalInfo-ListItem" to="http://www.baidu.com" >
              <img slot="icon" src="../static/image/icons/invite.png" />      
              <span>1</span>
            </mt-cell>
            <mt-cell title="社区服务中心" class="personalInfo-ListItem" to="http://www.baidu.com" >
                <img slot="icon" src="../static/image/icons/community.png" />
            </mt-cell>
            <mt-cell title="版权服务中心" class="personalInfo-ListItem" to="http://www.baidu.com" >
                <img slot="icon" src="../static/image/icons/copyright.png" />        
            </mt-cell>
            <mt-cell title="公共编辑动态" class="personalInfo-ListItem" to="http://www.baidu.com" >
                <img slot="icon" src="../static/image/icons/edit.png" />
            </mt-cell>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
import contentCard from '../components/contentCard.vue'
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      userData: [],
      dataReceived: false
    }
  },
  created () {
    axios.get('http://user.cn/')
      .then(res => {
        this.userData = res.data.related
        this.dataReceived = !this.dataReceived
      })
  },
  components: {
    myHeader,
    myFooter,
    contentCard
  }
}
</script>
<style lang="less">
  * {
    margin:0;
    padding:0;
  }
  .contentArea{
    display:flex;
    width:900px;
    height:100%;
    margin:0 auto;
    align-content: space-between;
    
  }
  .leftContentArea,
  .rightContentArea,
  .noContentArea {
    margin-top:70px;
  }
  .noContentArea {
    width:700px;
    height:99999px;
    background-image:url('../static/image/pics/registerBackground.png');
    background-color:rgba(255,255,255,0.4);
    text-align: center;
    .loading {
    display: inline-block;
    margin:50% auto;
    font-size:35px;

    }

  }
  .storySideBar-ListItem-Anchor-Live {
    &:hover {
      color:#ffcf00;
    }
  }
  .storySideBar-ListItem-Anchor-Store {
    &:hover {
      color: #43d480;
    }
  }
  .storySideBar-ListItem-Anchor-Table {
    &:hover {
      color: #0084ff;
    }
  }
  .storySideBar-ListItem-Anchor-Zhuanlan {
    &:hover {
      color: #0f88eb;
    }
  }
  .storySideBar-ListItem-Anchor-Store {
    &:hover {
      color: #5478f0;
    }
  }
  .storySideBar-ListItem {
    cursor:pointer;
  }

  .rightContentArea {
    margin-left:30px;
  }
  .storySideBar {
    font-size: 15px;
    text-align: center;
    color: #8590a6;
    width:240px;
    height:160px;
    background-color:#fff;
    padding:20px 10px 0 10px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    box-sizing: border-box;
  }
  .personalInfo {
    position: sticky;
    top:60px;
    margin-top:20px;
    font-size:15px;
    color:#8590a6;
    width:240px;
    background-color:#fff;
    padding-right:20px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    box-sizing: border-box;
  }

  .storySideBar-List {
    display:flex;
    align-content: space-around;
    margin-bottom: 15px;
    .storySideBar-ListItem {
      display:inline-block;
      flex:1;
      list-style-type: none;
      .storySideBar-ListItem-Icon {
        display:block;
      }
    }
  }
  
  
</style>
