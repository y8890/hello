<template>
    <el-button 
            class="opt-btn" 
            style="margin-left:8px" 
            icon="Plus"
            type="primary"
            circle
            @click="handleAdd">
          </el-button>
          <el-button
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