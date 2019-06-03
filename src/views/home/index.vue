<template>
  <div>
    <h2 style="text-align:center;">饼图界面</h2>
    <div id="main" style="width: 900px;height:400px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts' // 全局导入，控制有时会报一个黄色警告错误，但不影响程序的运行。

// 按需导入后 则不会有黄色警告，
// 同时这里之所以使用 require 而不是 import，
// 是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全。
// let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
// require('echarts/lib/chart/bar')
// // 引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
export default {
  created: function() {},
  methods: {
    chart() {
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      // myChart.setOption({
      //   // 标题
      //   title: {
      //     text: 'ECharts 入门示例'
      //   },
      //   tooltip: {},
      //   // 内容
      //   xAxis: {
      //     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子1']
      //   },
      //   yAxis: {},
      //   // 鼠标移动进去后要展示的
      //   series: [
      //     {
      //       name: '销量', //
      //       type: 'bar', // 饼图类型
      //       data: [5, 20, 36, 10, 10, 20] // 对应Xaxis里的data名称
      //     }
      //   ]
      // })
      myChart.setOption({
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  },
  mounted: function() {
    this.chart()
  }
}
</script>