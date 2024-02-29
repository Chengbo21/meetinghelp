<template>
  <div class="">
    <h3>
      欢迎来到首页
    </h3>
    <el-carousel class="cards" :interval="4000" type="card">
      <el-carousel-item v-for="item in imgArray" :key="item">
        <el-image style="height: 300px;" 
        :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgArray: [
        require("../assets/01.jpeg"),
        require("../assets/02.jpeg"),
        require("../assets/03.jpeg"),
        require("../assets/04.jpeg"),
        require("../assets/05.jpeg")
      ]
    };
  },
  created() { },
  mounted() { },
  watch: {},
  computed: {},
  methods: {},
}
</script>


<style  scoped>
.cards{
  margin-top:50px ;
  height: 350px;
}

</style>