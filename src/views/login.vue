<template>
    <el-form ref="login" :model="form" status-icon :rules="rules" label-width="100px" class="login-container">
        <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" label-width="80px" prop="username" class="username">
        <el-input type="input" auto-complete="off" placeholder="请输入账号" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="80px" prop="password" class="password">
        <el-input type="input" auto-complete="off" placeholder="请输入密码"  v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
    </el-form>
</template>

<script>
export default({
    name:'Login',
    data(){
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    {
                        required:true,
                        message:'请输入用户名',
                        trigger:'blur'
                    },
                    {
                        min:3,
                        message:'用户名长度不能少于3位',
                        trigger:'blur'
                    }
                ],
                password:[{
                    required:true,
                    message:'请输入密码',
                    trigger:'blur'
                }]
            }
        }
    },
    methods:{
        onSubmit(){

        }
    }
})
</script>
<style lang="less" scoped>
.login-container {
    width: 25%;
    margin: 30vh auto 0;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 3px #ccc;
    padding: 20px;
    box-sizing: border-box;
    .login_title {
        text-align: center;
        font-size: 20px;
        color: #333;
        margin-bottom: 40px;
    }
    /deep/.el-form-item--feedback:last-child {
        .el-form-item__content {
            margin-left: 0 !important;
            text-align: center;
        }
    }
    
}

</style>
