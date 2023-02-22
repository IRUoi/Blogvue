<!--
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-17 16:20:56
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-20 16:55:37
 * @FilePath: \blog-vue\src\views\Blogs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <Header></Header>
    <h1 align="center">主页</h1>
    <div class="block">
      <el-timeline>
        <el-timeline-item :timestamp="blog.created" placement="top" v-for="(blog,key) in blogs" :key=key>
          <el-card>

            <h4>
              <router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">
                {{blog.title}}
              </router-link>
            </h4>

            <p>{{blog.description}}</p>
            
          </el-card>
        </el-timeline-item>

      </el-timeline>
    </div>
    <div class="page">
      <el-pagination 
      :page-size="pageSize" 
      :pager-count="7" 
      layout="prev, pager, next" 
      :current-page="currentPage"
      @current-change = page
      :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header"

export default {
  name: "Blogs.vue",
  components: { Header },
  data() {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods: {
    page(currentPage) {
      const _this = this
      _this.$axios.get("/blogs?currentPage=" + currentPage).then((res) => {
        console.log(res)
        _this.blogs = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size

      })
    }
  },
  created(){
    this.page(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  margin: 0 auto;
  text-align: center;
}
</style>
<!-- https://image-1300566513.cos.ap-https://blogger.googleusercontent.com/img/a/AVvXsEgM85LEvtgJrUmGx95tmMptVQWhITwGOun2FEdThRoHM1iA2IV7J9KA94UtTJco4GVIvitht8kY-nc9U6SBQ6oLlsGCLSlr2S0dv9m04sUFE_suAa77Z8V-HxOFVxSsPMEqRgGGlC0ilOpb-a_tAjkvTr_ux8GfLjdCFWkj8HVQ-kGVukNz9W -->