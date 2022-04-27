<template>
    <div id="CompontHeader">
        <div class="l-content">
            <el-button @click="headerMenu" size="mini"  icon="el-icon-menu"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in  tage" :key="item.path" :to="{ path: item.path }">
                    <a :href="item.path" v-if="$route.name===item.name" @click="changgeBread(item)">{{item.label}}</a>
                    <span v-else @click="changgeBread(item)">{{item.label}}</span>
                </el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div class="r-content">
            <el-dropdown size="mini" trigger="click">
                <span class="el-dropdown-link">
                    <img :src="photo" alt="">
                </span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        
    </div> 
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'CompontHeader',
    data(){
        return {
            photo:require('@/assets/photo.png')
        }
    },
    methods:{
        headerMenu(){
            this.$store.commit('collapseMenu')
        },
        changgeBread(item){
          this.$router.push({
              name:item.name
          })
          this.$store.commit('selectMenu',item)
        },
        logOut(){
            this.$store.commit('clearMenu')
            this.$store.commit('clearToken')
            this.$router.push('/login')
        }
    },
    computed:{
        ...mapState({
            tage:state=>state.tab.tabList,
            currentMenu:state=>state.tab.currentMenu
        })
    }
}
</script>

<style lang="less">
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  #CompontHeader {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .l-content  {
         display: flex;
         align-items: center;
          span { 
              color: #999;
          }
          .el-breadcrumb {
              margin-left: 15px;
              .el-breadcrumb__inner a {
                  color: #fff;
              }

          }
      }

      .el-dropdown {
          .el-dropdown-link {
            img {
                width: 40px;
                border-radius: 50%;
            }
         }
      }

     
  }


</style>