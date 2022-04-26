<template>
    <div id="user">
         <el-dialog :title="operateType=='add'?'新增':'修改'" :visible.sync="isShow">
                <common-form :formLabel="opertateFormLabel" :form="opertateForm" :inline="true" ref="form"></common-form>
                <div class="" slot="footer" class="dialog-footer"></div>
                <el-button  @click="isShow=false">取消</el-button>
                <el-button type="primary" @click="confim">保存</el-button>
         </el-dialog>
         <div class="manage-header">
           <el-button type="primary" @click="addUser">新增</el-button>
           <common-form :formLabel="formLabel" :form="searchForm" :inline="true" ref="form">
                <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
           </common-form>
         </div>

         <compont-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="changePage" @edit="userEdit" @del="userDel"></compont-table>
    </div>
</template>
<script>
import CommonForm from '@/components/commonForm.vue'
import compontTable from '@/components/compontTable.vue'
import {getUser} from '@/api/data.js'
export default {
    name: 'user',
    components:{
        CommonForm,
        compontTable
    },
    data(){
        return {
            operateType:'add',
            isShow:false,
            opertateFormLabel:[
                {
                    model:'name',
                    label:'姓名',
                    type:'input'
                },
                 {
                    model:'age',
                    label:'年龄',
                    type:'input'
                },
                 {
                    model:'sex',
                    label:'性别',
                    type:'select',
                    opts:[
                        {
                            label:'男',
                            type:1,
                        },
                        {
                            label:'女',
                            type:0,
                        }
                    ]
                },
                 {
                    model:'birth',
                    label:'出生日期',
                    type:'date'
                },
                {
                    model:'addr',
                    label:'地址',
                    type:'input'
                },

            ],
            opertateForm:{
                name:'',
                addr:'',
                age:'',
                birth:'',
                sex:''
            },
            formLabel:[ {
                model:'keyword',
                label:'',
                type:'input'
            }],
            searchForm:{
              search:''
            },
             tableData: [],
             tableLabel:[
                 {
                     prop:'name',
                     label:'姓名'
                 },
                  {
                     prop:'age',
                     label:'年龄'
                 },
                  {
                     prop:'sexLabel',
                     label:'性别'
                 },
                  {
                     prop:'birth',
                     label:'出生日期',
                     width:'200'
                 },
                  {
                     prop:'addr',
                     label:'地址',
                     width:'300'
                 }
                 
             ],
             config:{
                 page:1,
                 total:30
             },
             
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        confim(){
            if(this.operateType==='edit'){
                this.$http.post('/user/edit',this.opertateForm).then(()=>{
                    this.isShow=false
                    this.getList()
                })
            }else {
                  this.$http.post('/user/add',this.opertateForm).then(()=>{
                    this.isShow=false
                    this.getList()
                })
            }
            
        },
        addUser(){
            this.isShow=!this.isShow
            this.operateType = 'add'
            this. opertateForm={
                name:'',
                addr:'',
                age:'',
                birth:'',
                sex:''
            }
        },
        getList(name=''){
            console.log(name);
            this.config.loading =true
            name?(this.config.page)=1:''
            getUser({
                page:this.config.page,
                name
            }).then(res=>{
                this.tableData =  res.data.list.map(item=>{
                    item.sexLabel = item.sex == 1?'男':'女'
                    return item
                })
                this.config.total = res.data.count
                this.config.loading =false
            })
        },
        userEdit(item){
            this.operateType = 'edit'
            this.isShow = true
            this.opertateForm = item
        },
        userDel(item){
            this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
                confirmButtonText:'确认',
                cancelButtonText:'取消',
                type:'warning'
            }).then(()=>{
                const id = item.id
                this.$http({
                    method:'post',
                    url:'user/del',
                    params:{
                        id
                    }
                }).then(()=>{
                    this.$message({
                        type:'success',
                        message:'删除成功'
                    })
                    this.getList()
                })
            })

        },
        changePage(page){

            this.config.page = page
            this.getList()

        }
      

    }
}
</script>
<style lang="less" scoped>
.manage-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/deep/.manage-header>.el-form--inline>.el-form-item {
    margin-bottom: 0 !important;
}
.common-table {
    margin-top: 20px !important;
}

</style>