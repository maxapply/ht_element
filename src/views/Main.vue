<template>
    <el-container class="con">
        <el-aside width="auto">
            <component-aside></component-aside>
        </el-aside>
        <el-container>
            <el-header>
                <compont-header></compont-header>
            </el-header>
            <compont-tag></compont-tag>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import ComponentAside from '@/components/ComponentAside.vue'
import CompontHeader from '@/components/CompontHeader.vue'
import CompontTag from '@/components/CompontTag.vue'
export default {
  name: 'Home',
  components:{
    ComponentAside,
    CompontHeader,
    CompontTag
  },
  data(){
    return {

    }
  }
}

</script>
<style lang="less" scoped>
.con {
    height: 100%;
    .el-header {
        background-color: #333;
    }
}

#tag,
.el-main {
    background-color: #f4f4f4;
}

</style>
