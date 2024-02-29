<template>
  <div class="login">
    <div class="msg_login">
      <h3 class="title">后台管理系统</h3>
      <!--   
          el-form:表单  以前是form，在vue里面是el-form
          model:绑定数据(在data中的return里面保存，一一对应)
      
      -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入账号" prefix-icon="el-icon-unlock" type="text" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item prop="paasword">
          <el-input placeholder="请输入密码" show-password prefix-icon="el-icon-key" type="text"
            v-model="ruleForm.password"></el-input>
        </el-form-item>

        <div class="btn-login">
          <el-button type="primary" @click="login()">登录</el-button>
        </div>

      </el-form>
    </div>
  </div>
</template>
<!-- js代码 -->
<script>
 import axios from 'axios'
 export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { validator: validatePass, trigger: 'blur', }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    created(){

    },
    methods: {
      login() {
        //发送请求到后端服务器
        axios
        .get("http://localhost:8090/login", {
          params:{
            name:this.ruleForm.name,
            password:this.ruleForm.password
          }
        })
        .then((result =>{
          if(result.data.code==200){
            //成功 消息提示 跳转到home
            this.$message({
              message: result.data.msg,
              type: 'success'
            });
            //cookie缓存
            //localStorage
            //result时json格式数据 需要转换为字符串
            localStorage.setItem("VO",JSON.stringify(result));
            

            this.$router.push("./index")
          }else{
            this.$message({
              message: result.data.msg,
              type: 'error'
            });
          }
        })
        // .catch(err => {})
        )
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- css样式 -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url(../assets/bookbg1.png);
  background-repeat: no-repeat;
  position: relative;
  margin: 0;
}
.title{
  text-align: center;
  margin: 0px;
  color: aliceblue;
}
.msg_login {
  position: absolute;
  bottom: 100px;
  left: 200px;
  width: 300px;
  height: 150px;
  margin-left: -150px;
  margin-top: -125px;
  border-radius: 5px;
  box-shadow: 0px 5px 3px 0px;
  padding: 40px;
  /* border-bottom: 1px solid grey; */
  /* line-height: 30px; */
  /* background-color: rgb(176, 175, 175); */
  opacity: 90%;


}

.btn-login {
  text-align: center;
}

.btn-login button {
  width: 100%;
  height: 35px;
}
</style>