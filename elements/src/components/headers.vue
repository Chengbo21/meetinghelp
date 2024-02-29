<template>
  <div class="top">
    <div>
      <img class="u-img" src="../assets/OIP-C.jpg" alt="">
    </div>
    <el-dropdown class="users" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="loginout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name:""
    }
  },
  // 页面加载时触发
  created() {
   var vo= localStorage.getItem("VO");
  //  console.log(vo);
  //  vo现在是字符串类型，要将他转换为json格式
  var s=eval("(" + vo +")");
  // console.log(s);
    var uName=s.data.data.name;
    this.name=uName;
   },
  // 页面加载完触发,数据绑定完
  mounted() { },
  // 
  watch: {},
  //  
  computed: {},
  methods: {
    handleCommand(command){
      if(command=="loginout"){
        this.$message("用户退出登录");
        //退出系统
        //将用户信息删除
        localStorage.removeItem("VO");
        //跳转到登录页面
        this.$router.push("/")
      }
   
    }
  },
}
</script>
<style  scoped>
.users {
  margin-left: 10px;
  margin-bottom: 10px;
}

.top {
  display: flex;
  height: 70px;
  align-items: center;
  float: right;
}

.el-dropdown-link {
  cursor: pointer;
  color: #0b0b0b;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.u-img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>