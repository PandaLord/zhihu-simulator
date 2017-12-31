<template>
  <div class="commentCard">
    <div class="commentInfo">
      <span class="info">
        <img :src="commentsData.commentPhoto" />
        {{commentsData.commentName}}
      </span>
      <span class="timestamp">
        {{commentsData.timestamp}}
      </span>
    </div>
    <p>{{commentsData.comment}}</p>
    <div class="interactArea">
      <mt-button class="thumbsUpButton">
        <img slot="icon" src='../static/image/icons/ThumbsUp_16px.png' />
        {{commentsData.thumbsUp}}
      </mt-button>
      <mt-button class="replyButton">
        <img slot="icon" src='../static/image/icons/Reply_16px.png' />
        回复
      </mt-button>
      <mt-button class="thumbsDownButton">
        <img slot="icon" src='../static/image/icons/ThumbsDown_16px.png' />
        踩
      </mt-button>
      <mt-button class="reportButton">
        <img slot="icon" src='../static/image/icons/Report_16px.png' />
        举报
      </mt-button>    
    </div>
    <hr>
  </div>
</template>
<script>
export default {
  props: ['comments'],
  data () {
    return {
      commentsData: this.comments,
      isFocus: false
    }
  }
}
</script>
<style lang="less" scoped>
    * {
      padding:0;
      margin:0;
    }
    .commentInfo {
      display:inline-block;
      width:100%;
      line-height:24px;
      .info {
        float:left;
        img {
          vertical-align: top;
        }
        
      }
      .timestamp {
        float:right;
      }
    }

    .interactArea {
      display:flex;
      width:40%;
      white-space: nowrap;
      justify-content: flex-start;
      .thumbsUpButton,
      .thumbsDownButton,
      .reportButton,
      .replyButton {
        font-size:16px;
        line-height: 20px;
        height:25px;
        flex:1;
        opacity:0;
        transition:opacity 0.3s;
        cursor:pointer;
        background-color:#fff;
        box-shadow:none;
        &::after {
        background-color: transparent;
        }
      }
      .thumbsUpButton {
        flex:0 1 auto;
        opacity:1;
      }
    }
    .commentCard {
      font-size:17px;
      margin-top:8px;
      hr {
        width:97%;
        margin:5px auto;
        opacity:0.2;
      }
      &:hover {
        .thumbsDownButton,
        .reportButton,
        .replyButton {
          opacity:1;  
        }
      }
      
    }

</style>
