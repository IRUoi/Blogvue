<!--
 * @Author: IRUoi pretvorniki@gmail.com
 * @Date: 2023-02-17 16:21:01
 * @LastEditors: IRUoi pretvorniki@gmail.com
 * @LastEditTime: 2023-02-20 13:10:28
 * @FilePath: \blog-vue\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-container>
      <el-header><img class="mlogo" src="../assets/logo.png" alt=""></el-header>
      <el-main>
        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          
          <el-form-item label="Username" prop="username">
            <el-input v-model="ruleForm.username" ></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
            <el-button @click="resetForm('ruleForm')">Cancel</el-button>
          </el-form-item>

        </el-form>
      </el-main>
    </el-container>


  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header,
.el-footer {
  /* background-color: #B3C0D1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.mlogo {
  height: 80%;
  margin-top: 5px;
}
.demo-ruleForm{
  max-width: 500px;
  margin: auto;
}
</style>

<script>

export default {
  name: 'Login',
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
    return {
      ruleForm: {
        username: 'admin',
        password: '111111'

      },
      rules: {
        username: [
          { required: true, massage: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, massage: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, massage: '请输入密码', trigger: 'change' },
          // { min: 3, max: 15, massage: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const _this = this
          this.$axios.post('http://localhost:8099/login',this.ruleForm).then(
            (res) => {

              const token = res.headers['authorization']
              
              _this.$store.commit("SET_TOKEN",token)
              _this.$store.commit("SET_USERINFO",res.data.data)
              _this.$router.push("/blogs")

            }
          )
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>