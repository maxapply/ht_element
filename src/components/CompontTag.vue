<template >
    <div id="tag">
        <el-tag
            v-for="(tag,index) in tags"
            size="small"
            :effect="$route.name===tag.name?'dark':'plain'"
            @click="changgeMenu(tag)"
            @close="handleClose(tag,index)"
            :closable="tag.name!=='home'"
            :key="index">
            {{tag.label}}
        </el-tag>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
   name:'CommonTag',
   data(){
       return {
       }
   },
   computed:{
       ...mapState({
           tags:state=>state.tab.tabList
       })
   },
   methods:{
       ...mapMutations({
          close:'closeTag'
       }),
       changgeMenu(item){
          this.$router.push({
              name:item.name
          })
          this.$store.commit('selectMenu',item)
       },
       handleClose(item,ind){
           const leng = this.tags.length-1
            this.close(item)
           if(item.name!==this.$route.name){
               return
           }


           if(leng===ind){
            this.$router.push({
                name:this.tags[leng-1].name
            })
           }else {
                this.$router.push({
                name:this.tags[ind].name
            })
           }

       }
   }

}
</script>
<style lang="less" scoped>
#tag {
    padding: 20px 20px 0;
    box-sizing: border-box;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>