import Vue from 'vue'
import Router from 'vue-router'
import Discovery from '../page/discovery.vue'
import Topic from '../page/topic.vue'
import Home from '../page/Home.vue'
import Register from '../components/register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/discovery/',
      component: Discovery
    },
    {
      path: '/topic/',
      component: Topic
    },
    {
      path: '/home/',
      component: Register

    }
  ]
})
