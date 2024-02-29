<template>
  <div class="">
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
                value: 3,
                name: '生活知识阅读组'
              },
              {
                value: 5,
                name: '户外生存阅读组'
              },
              {
                value: 7,
                name: '经济发展阅读组'
              },
              {
                value: 9,
                name: '法律法规阅读组'
              },
              {
                value: 11,
                name: '烹饪技巧阅读组'
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
.flower{
margin: 0 auto;
}
</style>