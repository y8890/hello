<template>
    <div>登录页</div>
    用户名<input type="text" @input="handleUsernameInput" />
    密码<input type="password" @input="handleInput"/>
    <button @click="handleConfirm">确定</button>
</template>

<script>

export default{  
    methods:{
        handleUsernameInput(event){
            localStorage.getItem('yonghuming' , event.target.value)
        },
        handleInput(event){
             localStorage.getItem('shifoudenglu', event.target.value)
        },
         handleConfirm() {
        const pwd = localStorage.getItem('shifoudenglu')
        if (pwd === 'shi' ){
            this.$router.back()
        }else {
            alert('密码不正确')
        }

    }
    }
}
</script>