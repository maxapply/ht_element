<template>

    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <h3>{{isCollapse?'后台':'通用后台管理系统'}}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item> 
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span> 
            </template>
            <el-menu-item-group>
                <el-menu-item  @click="clickMenu(sonItems)" v-for="sonItems in item.children" :key="sonItems.path" :index="sonItems.path">
                    <i :class="'el-icon-'+sonItems.icon"></i>
                    <span slot="title">{{sonItems.label}}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
      height: 100%;
      border: none;
      h3 {
          color: #fff;
          text-align:center;
          line-height: 48px;
      }
  }
</style>

<script>
  export default {
    data() {
      return {
        // menu:[
        //     {
        //         path:'/',
        //         name:'home',
        //         label:'首页',
        //         icon:'s-home',
        //         url:'Home/Home'
        //     },
        //     {
        //         path:'/mall',
        //         name:'mall',
        //         label:'商品管理',
        //         icon:'video-play',
        //         url:'MallManage/MallManage'
        //     },
        //     {
        //         path:'/user',
        //         name:'user',
        //         label:'用户管理',
        //         icon:'user',
        //         url:'userManage/userManage'
        //     },
        //     {
        //         label:'其他',
        //         icon:'location',
        //         children:[{
        //             path:'/pageOne',
        //             name:'pageOne',
        //             label:'页面1',
        //             icon:'setting',
        //             url:'other/pageOne'
        //         },{  
        //             path:'/pageTwo',
        //             name:'pageTwo',
        //             label:'页面2',
        //             icon:'setting',
        //             url:'other/pageTwo'
        //         }]

        //     }
        // ]
        menu:[]
      };
    },
    computed:{
        noChildren() {
            return this.asyncMenu.filter(item=>item =!item.children)
        },
        hasChildren(){
            return this.asyncMenu.filter(item=> item =item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        },
        asyncMenu(){
          return this.$store.state.tab.menu
        }

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
          this.$router.push({
              name:item.name
          })
          this.$store.commit('selectMenu',item)
      },
 
    }
  }
</script>