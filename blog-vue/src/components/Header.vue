<!--
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-19 19:01:10
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-22 13:38:55
 * @FilePath: \blog-vue\src\components\Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>

    <div class="block">
      <h3>欢迎来到IRU的博客</h3>
      <el-avatar shape="square" :size="70" :src="user.avatar"></el-avatar>
      <div>
        {{ user.username }}
      </div>
      
    </div>
    
    <div class="maction">
      <span><el-link href="/blogs">主页</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span><el-link type="success" href="/blog/add">发表博客</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span v-show="!hasLogin"><el-link type="primary" href="/login">登录</el-link></span>
      
      <span v-show="hasLogin"><el-link type="danger" @click="logout">登出</el-link></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      user: {
        username: '请登录',
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
      },
      hasLogin: false
    }
  },
  methods: {
    logout(){
      const _this = this
      this.$confirm('您确定要退出吗?', '登出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(()=> {
        _this.$axios.get('http://localhost:8099/logout',{
        headers:{
          "Authorization": localStorage.getItem("token")
        }
      }).then(() => {
        window.sessionStorage.clear()
        _this.$store.commit("REMOVE_INFO")
        _this.$router.push("/blogs")
        location.reload()
      })
    })
      
    }
  },
  created(){
    if(this.$store.getters.getUser.username){
      this.user.username = this.$store.getters.getUser.username
        this.user.avatar = this.$store.getters.getUser.avatar
        this.hasLogin = true
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .maction{
    margin: 10px 0;
    text-align: center;
  }
  .block{
    margin: 10px 0;
    text-align: center;
  }
</style>
