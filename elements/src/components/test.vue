<template>
  <div class="">
    <h3>
      用户列表页面
    </h3>
    <div class="flower" id="main" style="width: 600px;height: 400px;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  components: {},
  data() {
    return {
    }
  },
  created() { },
  //页面加载完，数据绑定后调用
  mounted() {
    this.find_all();
  },
  watch: {},
  computed: {},
  methods: {
    find_all() {
      //基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      
      //指定图表的配置项和数据
      var option = {
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 100,
                name: 'S5加入玩家'
              },
              {
                value: 200,
                name: 'S6加入玩家'
              },
              {
                value: 300,
                name: 'S7加入玩家'
              },
              {
                value: 400,
                name: 'S9加入玩家'
              },
              {
                value: 500,
                name: 'S8加入玩家'
              }
            ],
            roseType: 'area'
          }
        ]
      };

      //使用刚指定的配置项和数据显示图表
      myChart.setOption(option);
    }
  },
}
</script>
<style  scoped>
.flower {
  margin-left: 300px;
}
</style>