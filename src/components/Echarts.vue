<template>
    <div  ref="echart"></div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  props:{
      isAxisChart:{
          type:Boolean,
          default:true
      },
      chartData:{
          type:Object,
          default(){
              return {
                  xData:[],
                  series:[],
                  legendData:[]
              }
          }
      }
  },
  watch:{
      chartData:{
          handler:function(){
            this.initChart()
          },
          deep:true
      }

  },
  methods:{
      initChart(){
       this.initChartData()
       if(this.echart){
            this.echart.setOption(this.options)
       }else {
            this.echart = echarts.init(this.$refs.echart)
            this.echart.setOption(this.options)
       }
      },
      initChartData(){
          if(this.isAxisChart){
              this.axisOption.xAxis.data = this.chartData.xData
              this.axisOption.legend.data = this.chartData.legendData
              this.axisOption.series = this.chartData.series
          }else {
               this.normalOption.series = this.chartData.series
          }

      }

  },
  data(){
      return {
          axisOption:{
            legend: {
                data: []
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                data: [],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
                }
            ]
          },
          normalOption:{
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
          },
          echart:null
      }

  },
  computed: {
      options(){
          return this.isAxisChart?this.axisOption:this.normalOption
      }
  }
}
</script>