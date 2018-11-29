import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'shystrila'
      },
      {
        name: 'blabla'
      },
      {
        name: 'lalala'
      },
      {
        name: 'dhbvbshdj'
      }
    ],
    task: [
      {
        name: 'scsc',
        desc: 'scscsc'
      },
      {
        name: 'scsc',
        desc: 'scscsc'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getUsers () {
      return this.users
    }
  }
})
