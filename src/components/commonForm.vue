<template>
    <el-form  el-form ref="form" :model="form" label-width="100px" :inline="inline">
          <el-form-item :label="item.label" v-for="item in formLabel" :key="item.label">
            <el-input 
            v-if="item.type==='input'"
            v-model="form[item.model]" 
            :placeholder="'请输入'+item.label"
            ></el-input>

            <el-switch 
            v-if="item.type==='switch'"
            v-model="form[item.model]" 
            ></el-switch>

            <el-date-picker 
            v-if="item.type==='date'"
            type="date"
            value-format="yyyy-MM-DD"
            v-model="form[item.model]" 
            placeholder="选择日期"
            ></el-date-picker>

            <el-select  
            v-if="item.type==='select'"
            placeholder="请选择"
            v-model="form[item.model]" 
            >
                <el-option
                v-for="itemOpts in item.opts"
                :key="itemOpts.value"
                :label="itemOpts.label"
                :value="itemOpts.value">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
              <slot></slot>
          </el-form-item>
    </el-form>
</template>
<script>
export default {
    name:'commonForm',
    props:{
      formLabel:Array,
      form:Object,
      inline:Boolean
    },
    data(){
        return {
            
        }
    }
}
</script>