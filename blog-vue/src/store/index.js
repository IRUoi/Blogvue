import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //定义全局参数 其他页面可以直接获取state里面的内容
  state: {
    token: '', //方法一 localStorage.getItem("token") 
    //反序列化获取session会话中的 userInfo对象
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    //set
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token",token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      state.token = ''
      state.userInfo = ''
      localStorage.setItem("token",'')
      localStorage.setItem("userInfo",JSON.stringify(''))
    },
  },
  getters: {
    //相当于get
    //配置一个getUser可以直接获取已经反序列化对象的一个userInfo
    getUser: state => {
      return state.userInfo
    },
    getToken: state => {
      return state.token
    }
   
  },
  actions: {
    
  },
  modules: {
    
  }
})