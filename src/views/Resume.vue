<template>
  <div class="resume-container">
    <el-button v-if="editing" type="primary" @click="handleComplete">完成</el-button>
    <el-button v-else type="primary" @click="handleEdit">编辑</el-button>
    <h1>{{ info.name }}</h1>
    <ResumeList title="联系方式" :list="info.contact" :editing="editing"/>
    <ResumeList title="个人信息" :list="info.info" :editing="editing"/>
    <ResumeList title="技能清单" :list="info.skills" :editing="editing"/>
   <projectOrWorkExp type="WORK" :data="info.experiences" :editing="editing"/>
   <projectOrWorkExp type="PROJECT" :data="info.projectExps" :editing="editing"/>
    <ResumeList title="其他" :list="info.others" :editing="editing"/>
  </div>
</template>

<script>
import ResumeList from './ResumeList.vue'
import projectOrWorkExp from './projectOrWorkExp.vue'

import defaultResumeInfo from './Resumeinfo'

export default {
  components: {
    ResumeList,
    projectOrWorkExp,
  },
  created(){
    const cunChuDeShuJu = JSON.parse(localStorage.getItem('ResumeInfo'))
    if(cunChuDeShuJu){
      this.info = cunChuDeShuJu
    }else{
      this.info = defaultResumeInfo;
    }
  },
  data() {
    return {
      editing: false,
      info: {}
    }
  },
  methods:{
    handleEdit(){
      this.editing=true;
    },
    handleComplete(){
      this.editing =false;

      localStorage.setItem('ResumeInfo' , JSON.stringify(this.info))
    }
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  color: #409eff
}
h1,
h2 {
  border-bottom: 1px solid #409eff;
}

h1{
  margin:21px 0;
}
body {
  background: #d1d1d1;
}

.resume-container {
  background: white;
  width: 900px;
  padding: 10px 25px;
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
}
</style>