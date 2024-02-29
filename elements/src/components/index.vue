<template>
  <div>
    <el-container>
      <el-header>
        <!-- 顶部导航栏 -->
        <headers></headers>
      </el-header>
      <el-container>
        <!-- 左侧菜单栏 -->
        <el-aside >
          <menus></menus>
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
 //导入menu页面
import menus from './menus.vue';
import headers from './headers.vue'
export default {
  components:{
    menus,
    headers
  },
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: right;

}

.el-aside {
  background-color: #545c64;
  color: #333;
  width: 200px;
  height: 600px;
}



</style>