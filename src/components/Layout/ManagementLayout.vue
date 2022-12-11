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
            <el-sub-menu>
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
            <div class="top"></div>
            <div class="concent">
                <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            sideBarWidth:220,
        }
    },
    methods: {
        handleMenuSelect(index){
            console.log('index is',index);
            this.$router.push({
                name:index,
            })
        },
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
}
.concent {
    width:100%;
    height: calc(100% - 50px);
}
.concent.el-menu {
    background: #222b45;
}
</style>