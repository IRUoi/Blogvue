<!--
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-17 16:20:39
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-22 13:21:11
 * @FilePath: \blog-vue\src\views\BlogDetail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="hello">
    <Header></Header>

    <div class="mblog">
      <el-link icon="el-icon-edit" v-if="owner">
        <router-link :to="{ name: 'BlogEdit', params: { blogId: blog.id } }">
          编辑
        </router-link>
      </el-link>

      <el-divider v-if="owner" direction="vertical"></el-divider>

      <el-button v-if="owner" type="text" @click="deleteblog()">删除</el-button>
      <!-- <el-link type="danger" @click="deleteblog()">删除</el-link> -->

      <h1>{{ blog.title }}</h1>
      <el-divider></el-divider>
      <div class="markdown-body" v-html="blog.content"></div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"
import 'github-markdown-css'

export default {
  name: "BlogDetail.vue",
  components: { Header },
  data() {
    return {
      blog: {
        id: "",
        title: "",
        content: "",
      },
      owner: false,
    }
  },
  created() {
    const blogId = this.$route.params.blogId
    const _this = this
    // console.log(blogId)
    if (blogId) {
      this.$axios.get('/blog/' + blogId).then(res => {
        const blog = res.data.data
        _this.blog.id = blog.id
        _this.blog.title = blog.title
        _this.blog.description = blog.description

        var MardownIt = require("markdown-it")
        var md = new MardownIt()

        var result = md.render(blog.content)

        _this.blog.content = result

        _this.owner = (blog.userId == _this.$store.getters.getUser.id)

      })
    }
  },
  methods: {
    deleteblog() {
      const blogId = this.$route.params.blogId
      const _this = this
      if (blogId) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$axios.post(`/blog/delete/${blogId}`, null, {
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            _this.$router.push("/blogs")
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mblog {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: 700px;
  padding: 30px 30px;
}
</style>
