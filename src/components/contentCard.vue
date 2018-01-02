<template>
  <div class='contentCard'>
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
            <mt-button plain class='commentButton upButton'>   
                  <img slot="icon" src='../static/image/icons/uparrow.png' />
                  {{convertNum(data.answer.upCommentsNum)}}
              </mt-button>
              <mt-button plain class='commentButton downButton'>
                  <img slot="icon" src='../static/image/icons/downarrow.png' />
              </mt-button>
          </div>
          <mt-button plain @click='toggleComments' class='showCommentsButton'>
              <img slot="icon" src='../static/image/icons/Comment_16px.png' />
              {{ commentsToggle(convertNum(data.answer.comments.length)) }} 
          </mt-button>
        </div>
        <div class="actionArea">       
              <mt-button plain class='shareButton'>
                  <img slot="icon" src='../static/image/icons/Share_16px.png' />
                  分享
              </mt-button>
              <mt-button plain class='collectButton'>
                  <img slot="icon" src='../static/image/icons/Favorite_16px.png' />
                  收藏
              </mt-button>
              <mt-button plain class='appreciateButton'>
                  <img slot="icon" src='../static/image/icons/Thank_16px.png' />
                  感谢
              </mt-button>
              <mt-button plain class="moreButton">
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
import commentCard from './commentCard.vue'
export default {
  name: 'contentCard',
  props: ['data'],
  data () {
      return {
          commentsData: this.data.answer.comments,
          isShow: false

      }
  },
  computed: {
    
  },
  components: {
    commentCard
  },
  methods: {
      toggleComments () {
        this.isShow = !this.isShow
      },
      convertNum (num) {
          if (num > 1000) {
              return Number.parseFloat(num/1000).toFixed(1) + "K"
          }
            return num
      },
      commentsToggle (text) {
        if (!this.isShow) {
          return text + ' 条评论'
         } else {
            return '收起评论'
          }
      }

  }
}
</script>
<style lang="less" scoped>
  @fontColor:#2d84cc;
  @bColor:#fff;
  @commendButtonColor:#ebf3fb;

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
      align-items: center;
      justify-content: flex-start;
      flex:0 1 36%;
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
  .moreButton {
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


