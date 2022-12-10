<template>
    <div class="container">
        <div class="left"></div>
        <div class="right">
            <div class="top"></div>
            <div class="concent">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style>
.container {
    width: 100%;
    height: 100%;
    background: #EEF0F3;
    display: flex;
}
.left {
    width:290px;
    height:100%;
    background: white;
}
.right {
    width:calc(100% - 290px);
    height: 100%;
    display: flex;
    flex-direction: column;
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
</style>