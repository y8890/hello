<template>
    <button @click="handleclick">返回</button>
</template>
<script>
export default {
    methods :{
        handleclick(){
            this.$router.back ()
        },
    },
}
</script>
