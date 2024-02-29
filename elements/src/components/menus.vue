<template>
  <div>
    <el-menu default-active="2" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <div class="music">
        <span class="aa">云音乐后台管理系统</span>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <router-link tag="span" to="/index/homepage" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">首页</span>
            </router-link>
        </template>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <!-- 
            页面跳转 超链接
            <router-link ></router-link>
            tag的值为标签的名称
            to：跳转的地址
           -->
          <el-menu-item index="2-1">
            <router-link tag="span" to="/index/userList" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">用户列表</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link tag="span" to="/index/addUser" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">用户分组情况</span>
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-service"></i>
          <span>歌曲管理</span>
        </template>
        <el-menu-item-group>
          <!-- 页面跳转 超链接
          
          -->
          <el-menu-item index="3-1">
            <router-link tag="span" to="/index/musicList" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">歌曲列表</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link tag="span" to="/index/addMusic" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link">新增歌曲</span>
            </router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.aa {
  color: rgb(208, 221, 224);
}

.music {
  font-size: 18px;

  text-align: center;
}
</style>