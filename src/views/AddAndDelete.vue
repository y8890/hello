<template>
    <el-button 
            v-if="showAdd"
            class="opt-btn" 
            style="margin-left:8px" 
            icon="Plus"
            type="primary"
            circle
            @click="handleAdd">
          </el-button>
          <el-button
             v-if="showDelete"
            class="opt-btn" 
            style="margin-left:8px"
            icon="Minus" 
            type="danger" 
            circle
            @click="handleDelete">
          </el-button>
</template>

<script>
export default{
    emits:['add','delete'],
    props:{
        showAdd:{
            type:Boolean,
            default:true,
        },
        showDelete:{
            type:Boolean,
            default:true,
        },
    },
    methods:{
        handleAdd(){
            this.$emit('add')
        },
        handleDelete(){
            this.$emit('delete')
        },
    }
}
</script>

<style scoped>
    .opt-btn {
        width: 20px;
        height: 20px;
    }
</style>