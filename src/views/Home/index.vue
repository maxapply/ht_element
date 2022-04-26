<template>
    <el-row id="home" :gutter="20">
        <el-col :span="8" >
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
                    <div class="user">
                      <img :src="photo" alt="">
                        <div class="userInfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                </div>
                <div class="text login-info">
                    <p>上次登录时间：<span>2022-04-22</span></p>
                    <p>上次登录地点：<span>北京</span></p>
                </div>
            </el-card>

            <el-card class="box-card table" shadow="hover">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column v-for="(item,key) in tableLabel" :key="key"  :prop="key" :label="item" ></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                 <el-card  v-for="(item,index) in countData" :key="index" :body-style="{display:'flex',alignItems: 'center',padding:0}">
                    <i :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
                    <div style="padding: 14px;">
                        <p>￥{{item.value}}</p>
                        <p>{{item.name}}</p>
                    </div>
                </el-card>
            </div>

            <el-card class="box-card"  shadow="hover" style="height:320px">
                <echart :chartData="echartData.order" style="height:320px"></echart>

            </el-card>

            <div class="box">

                   <el-card class="box-card"  shadow="hover" style="height:313px">
                         <echart :chartData="echartData.user" style="height:313px"></echart>
                   </el-card>

                   <el-card class="box-card"  shadow="hover" style="height:313px">
                          <echart :chartData="echartData.viedo" :isAxisChart="false" style="height:313px"></echart>
                   </el-card>

            </div>


        </el-col>
    </el-row>
</template>
<script>
import {getData} from '@/api/data'
import * as echarts from 'echarts'
import Echart from '@/components/Echarts.vue'
export default {
    name:'Home',
    components:{
        Echart
    },
    data(){
        return { 
           photo:require('@/assets/photo.png'),
            tableData: [],
            tableLabel: {
                name:'产品名称',
                todayBuy:'今日购买',
                monthBuy:'本月购买',
                totalBuy:'总购买'
            },
            countData:[
                {
                    name:'今日支付订单',
                    icon:'success',
                    value:'1234',
                    color:'#ff8800'

                },
                {
                    name:'今日收藏订单',
                    icon:'star-on',
                    value:'210',
                    color:'#5ab1ef'
                },
                {
                    name:'今日未支付订单',
                    icon:'s-goods',
                    value:'1234',
                    color:'#2ec7c9'

                },
                {
                    name:'本月支付订单',
                    icon:'success',
                    value:'1234',
                    color:'#ff8800'

                },
                {
                    name:'本月收藏订单',
                    icon:'star-on',
                    value:'210',
                    color:'#5ab1ef'

                },
                {
                    name:'本月未支付订单',
                    icon:'s-goods',
                    value:'1234',
                    color:'#2ec7c9'

                }
            ],
            echartData:{
                order:{
                  legendData:[],
                  xData:[],
                  series:[]
                },
                user:{
                  legendData:[],
                  xData:[],
                  series:[]
                },
                viedo:{
                  series:[]
                }
            }
        }
    },
    mounted(){
        getData().then(res=>{
            let {data,code} = res.data
            if(code==20000){
              this.tableData = data.tableData
              const order = data.orderData
              const xData =order.date
              const keyArray = Object.keys(order.data[0])
              const series = []
              keyArray.forEach(key=>{
                  series.push({
                      name:key,
                      data:order.data.map(item=>item[key]),
                      type:'line'
                  })

              })

              this.echartData.order.xData = xData
              this.echartData.order.legendData = keyArray
              this.echartData.order.series = series


             const user = data.userData

               this.echartData.user.xData = user.map(item=>item.date)
               this.echartData.user.legendData = ['新增用户', '活跃用户']
               this.echartData.user.series =  [
                        {   name: '新增用户',
                            data: user.map(item=>item.new),
                            type: 'bar'
                        },
                        {
                            name: '活跃用户',
                            data: user.map(item=>item.active),
                            type: 'bar'
                        }
                    ]

                      this.echartData.viedo.series =  [
                        {
                            type: 'pie',
                            data: data.videoData,
                        }
                    ]


            }

        })
    }
}
</script>
<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;
    img {
        width: 150px;
        border-radius: 50%;
    }
    .userInfo {
        margin-left: 30px;
        p {
            display: block;
            font-size: 30px;
            color: #333;
            font-weight: 700;
            margin: 10px 0;
            &:last-child {
            font-size: 16px;
            color: #999;
        }
        }
    }
   
}

.login-info {
    p {
        font-size: 16px;
        color: #999;
    }
}

.box-card.table{
    margin-top: 20px;
    height: 480px;
}

.num {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .el-card {
        width: 31.9%;
        height: 60px !important;
        height: auto;
        margin-right: 20px !important;
        margin-bottom: 20px !important;
        .el-card__body {
       
            i {
                display: block;
                width: 60px;
                height: 60px;
                line-height: 60px;
                font-size: 30px;
                text-align: center;
                color: #fff;
            }
            div{
                padding: 0 !important;
                p{
                    margin: 0;
                    margin-left: 15px;
                    font-size: 23px;
                    color: #333;
                    &:last-child {
                        font-size: 14px;
                        color: #999;
                    }
                }
            }
        }

        &:nth-child(3),
        &:last-child {
            margin-right: 0 !important;
        }

    }
}

.box {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .box-card {
        flex: 1;
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
}
</style>