<template>
    <button @click="handleclick">跳转</button>
</template>
<script>
export default {
    methods :{
        handleclick(){
            this.$router.push ("./PageB")
        },
    },
}
</script>