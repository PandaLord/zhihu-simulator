/* eslint-disabled */
<template>
  <div class='contentCard' @click="init">
      <div class='relatedInfo' >
          <span>{{ data.relatedName}}
              {{data.action}} 了问题
              .{{data.timestamp }}</span>
      </div>
      <div class='answerInfo'>
          <span>{{ data.answer.answerName}}</span>
          <span>,{{ data.answer.intro }}</span>
          <a href='#' class='answerTitle'>{{ data.answer.title }}</a>
          <p>
              {{ data.answer.content }}
              <a href='#' class='extendAnchor'>阅读全文</a>
          </p>  
      </div>
      <div class='interactArea'>
        <div class="commentArea">
          <div class="commentButtonArea">
            <mt-button 
            @click='buttonToggle($event.target)' plain 
            class='commentButton upButton'>   
                  <img slot="icon" src='../static/image/icons/uparrow.png' />
                  {{convertNum(data.answer.upCommentsNum)}}
            </mt-button>
            <mt-button 
              @click='buttonToggle($event.target)' plain 
              class='commentButton downButton'>
                  <img slot="icon" src='../static/image/icons/downarrow.png' />
            </mt-button>
          </div>
          <mt-button plain @click='toggleComments' class='showCommentsButton'>
              <img slot="icon" src='../static/image/icons/Comment_16px.png' />
              {{ commentsToggle(convertNum(data.answer.comments.length)) }} 
          </mt-button>
        </div>
        <div class="actionArea">
              <div v-if="isShared" class="shareArea">                
                  <mt-button plain class="shareAreaButton">
                    <img slot="icon" src="../static/image/icons/Link_16px.png">
                    复制链接
                  </mt-button>
                  <mt-button plain class="shareAreaButton">
                    <img slot="icon" src="../static/image/icons/Weibo_16px.png">
                    分享到微博
                  </mt-button>
                  <mt-button plain class="shareAreaButton">
                    <img slot="icon" src="../static/image/icons/Weixin_16px.png">
                    微信扫一扫
                  </mt-button>    
              </div>       
              <mt-button @click.stop="isShared = !isShared" plain class='shareButton'>
                  <img slot="icon" src='../static/image/icons/Share_16px.png' />
                  分享
              </mt-button>
              <mt-button plain class='collectButton'>
                  <img slot="icon" src='../static/image/icons/Favorite_16px.png' />
                  收藏
              </mt-button>
              <mt-button plain @click="isThanked = !isThanked" class='appreciateButton'>
                  <img slot="icon" src='../static/image/icons/Thank_16px.png' />
                  {{isThanked ? '取消感谢' : "感谢"}}
              </mt-button>
              <div v-if="isMore" class="moreArea">
                <mt-button plain class="moreAreaButton">
                  没有帮助
                </mt-button>
                <mt-button plain class="moreAreaButton">
                  举报
                </mt-button>
                <mt-button plain class="moreAreaButton">
                  禁止转载
                </mt-button>
              </div>
              <mt-button plain @click.stop="isMore = !isMore" class="moreButton">
                  <img slot="icon" src='../static/image/icons/More_16px.png' /> 
              </mt-button>
              
        </div> 
      </div>
      <div class="commentArea" v-show="isShow">
        <comment-card
        v-for="(comment,index) in commentsData"
        :key="index"
        :comments="comment">
        </comment-card>
      </div>
      <mt-button @click="toggleComments" class="closeComment" v-show="isShow">
          收起评论
          <img src="../static/image/icons/CollapseArrow_16px.png" />
      </mt-button>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
import $ from 'jquery'
import commentCard from './commentCard.vue'
export default {
  name: 'contentCard',
  props: ['data'],
  data () {
      return {
          commentsData: this.data.answer.comments,
          isShow: false,
          isThanked: false,
          isShared: false,
          isMore: false
      }
  },
  components: {
    commentCard
  },
  created () {
    $('.upButton').prop('value', false)
    $('.downButton').prop('value', false)
  },

  methods: {
      init () {
          this.isMore = false
          this.isShared = false
      },

      toggleComments () {
        this.isShow = !this.isShow
      },

      convertNum (num) {
          if (num > 1000) {
              return Number.parseFloat(num / 1000).toFixed(1) + 'K'
          }
            return num
      },
      commentsToggle (text) {
        if (!this.isShow) {
          return text + ' 条评论'
         } else {
            return '收起评论'
          }
      },
      buttonToggle (event) {
        // cb是当前点击按钮，ob是兄弟按钮
        let cb = $(event)
        let ob = cb.siblings()
        // ct是当前按钮的属性（字符串格式），bool是转化为布尔，newct是相反的按钮属性
        // ot,obool,newot同理
        let ct = cb.prop('value')
        let bool = ct === 'false'
        let newct = ct === 'false'
        ? 'true' : 'false'
        let ot = ob.prop('value')
        let obool = ot === 'false'
        let newot = ot === 'false'
        ? 'true' : 'false'
        if (!bool) {
          console.log('当前按钮无状态')
          cb.css('backgroundColor', '#2d84cc')
          cb.css('color', '#e4ebf3')
          console.log('当前点击按钮从无状态变为有状态')
          if (obool) {
            console.log('其他按钮有状态')
            ob.css('backgroundColor', '#e4ebf3')
            ob.css('color', '#2d84cc')
            ob.prop('value', newot)
            console.log('其他按钮切换为无状态')
          }
        } else {
          console.log('当前按钮有状态')
          cb.css('backgroundColor', '#e4ebf3')
          cb.css('color', '#2d84cc')
          console.log('当前按钮切换为无状态')
        }
        cb.prop('value', newct)
      }
  }
}
</script>
<style lang="less" scoped>
  @fontColor:#2d84cc;
  @bColor:#fff;
  @commendButtonColor:#e4ebf3;

  .answerTitle {
    font-size:25px;
    font-weight:bold;
    display:block;
    text-decoration: none;
    &:visited {
      color:#000;
    }
  }

  .extendAnchor {
    color:@fontColor;
    text-decoration: none;
    
  }
  .interactArea {
    display:flex;
    width:100%;
    height:30px;
    white-space: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding:10px 20px;
    margin:0 -20px;

    .commentArea,
    .actionArea {
      display: inline-flex;
      position:relative;
      align-items: center;
      justify-content: flex-start;
      flex:0 1 36%;
      
      .moreArea {
        position: absolute;
        height:120px;
        right:-10%;
        bottom:40px;
        background-color:@bColor;
        z-index:1000;
        &:after {
          content:"";
          display:block;
          position: absolute;
          border: 8px solid transparent;
          border-top-color:#e7eaf1;
          left:40%;
          width:0;
          height:0;
        }
        .moreAreaButton {
          color:#262626;
          display: block;
          height: 40px;
          width:100%;
          text-align:start;
          &:hover {
            color:#7a8599;
            background-color:#f4f8fb;   
            }
        }
        
      }
      .shareArea {
        position: absolute;
        height:120px;
        left:-10%;
        bottom:40px;
        background-color:@bColor;
        z-index:1000;
        
        &:after {
          content:"";
          display:block;
          position: absolute;
          border: 8px solid transparent;
          border-top-color:#e7eaf1;
          left:40%;
          width:0;
          height:0;
        }
        .shareAreaButton {
          text-align:start;
          color:#262626;
          display: block;
          height: 40px;
          width:100%;
          &:hover {
            color:#7a8599;
            background-color:#f4f8fb;   
          }
        }
      }
    }
    .commentArea {
      width:20%;
    }
    .commentButtonArea {
      display:inline-flex;
      justify-content:space-between;
      .commentButton {
        background-color:@commendButtonColor;
      }
      .downButton {
        flex:0 1 auto;
        margin-left:10px;
      }
    } 
  }
  
  .commentButton,
  .showCommentsButton,
  .shareButton,
  .appreciateButton,
  .collectButton,
  .moreButton,
  .shareAreaButton,
  .moreAreaButton {
    color: @fontColor;
    border:none;
    font-size:15px;
    cursor: pointer;
    &::after {
        background-color: transparent;
    }
  }
  .closeComment {
      position: fixed;
      bottom:30px;
      left:60%;
      &::after {
          background-color: transparent;
      }
  }

  .contentCard {
    margin:0 auto 20px auto;
    background:rgb(255,255,255);
    width:700px;
    font-size:17px;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    box-sizing: border-box;
    padding:20px;
  }
</style>


