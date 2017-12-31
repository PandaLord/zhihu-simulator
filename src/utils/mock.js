import Mock from 'mockjs'
Mock.Random.extend({
  action: function () {
    var actions = ['关注', '赞同', '收藏', '回答']
    return this.pick(actions)
  }
})
Mock.Random.extend({
  title: function () {
    var titles = [
      '如何熟练的装逼？', '如何完成家庭作业', '如何成为成功人士？', '如何优雅的吃饭？']
    return this.pick(titles)
  }
})
export default Mock.mock('http://user.cn/', {
  'userId|100-5000': 100,
  'related|1-50': [
    {
      'relatedName': '@cname',
      'action': '@action',
      'timestamp': '@time',
      'answer': {
        'answerName': '@cname',
        'intro': '@csentence',
        'title': '@title',
        'content': '@cparagraph',
        'upCommentsNum|1-2000': 1,
        'comments|1-50': [
          {
            'commentName': '@cname',
            'comment': '@sentence',
            'commentPhoto': '@dataimage("24x24")',
            'thumbsUp|1-500': 1,
            'timestamp': '@time'
          }
        ]
      }
    }
  ]
})
