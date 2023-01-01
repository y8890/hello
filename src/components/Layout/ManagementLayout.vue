<template>
    <div class="container">
        <div class="left"
        :style="{
            width:`${sideBarWidth}px`,
            height:`100%`,
            background:`#222b45`,
        }">  
        <el-menu default-active="Home" @select = "handleMenuSelect">
            <el-menu-item index="Home">
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="PageA">
                  <span>页面A</span>
            </el-menu-item>
            <el-menu-item index="PageB">
                <span>页面B</span>
            </el-menu-item>
            <el-menu-item index="Resume">
                <span>第二章</span>
          </el-menu-item>
            <el-sub-menu index="aboutMe">
            <template #title>
                <span>关于我</span>
            </template>
          <!-- <el-sub-menu index="aboutMe"> -->
            <span>个人简历</span>
          <!-- </el-sub-menu> -->
        </el-sub-menu>   

        </el-menu>
        </div> 
        <div class="right"
        :style="{
            width:`calc(100% - ${sideBarWidth}px`,
            height: `100%`,
            display:` flex`,
            flexDirection: `column`,
        }">
            <div class="top">
                <div class="header-container">
                    <!-- left -->
                </div>
                <div class="header-container" style="display:flex; justify-content:flex-end"  padding-right:20px>
    <el-dropdown style="height:100%; height:100%;display:flex;align-items:center;" @command="handleCommand">
        <span class="el-dropdown-link">
            <el-icon style="margin-right: 8px;"><Avatar /></el-icon>{{ username }}
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
        </span>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </template>
    </el-dropdown>
                </div>
            </div>
            <div class="concent">
                <router-view></router-view> 
            </div>
        </div>
    </div>
</template>

<script>
export default{
    created() {
        const username = localStorage.getItem('用户名');
        console.log(username);
        this.username = username;
        },
    data() {
        return{
            sideBarWidth:220,
            username:'',
        }
    },
    methods: {
        handleMenuSelect(index){
            console.log('index is',index);
            this.$router.push({
                name:index,
            })
        },
        handleCommand (command){
           const isLogout = command === 'logout'
           if (isLogout){
            localStorage.removeItem('已登录')
            localStorage.removeItem('用户名')
             this.$router.push({
                name:'login',
             })
           }
        }
    }
}
</script>


<style>
.container {
    width: 100%;
    height: 100%;
    background: #EEF0F3;
    display: flex;
}
.top {
    width:100%;
    height: 50px;
    background:white;
    border-bottom: 1px soild #d1d1d1;
    display: flex;
    justify-content: space-between;
}
.concent {
    width: calc(100% - 16px);
    height: calc(100% - 50px - 16px);
    overflow:suto;
    padding: 8px;
}
.concent.left.el-menu {
    background-color:unset;
    border-right:unset
}
.container.left.el-sub-menu_title,
.container.left.el-menu-item-group_title,
.container.left.el-menu-item{
    color:rgb(42, 154, 169);
}
.container.left.el-menu.is-active{
color: #409eff;
}
.header-container {
    height: 100%;
    min-width: 100px;
    /* background-color: lightblue; */
}

</style>