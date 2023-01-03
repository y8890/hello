<template>
  <div class="resume-container">
    <el-button v-if="editing" type="primary" @click="handleComplete">完成</el-button>
    <el-button v-else type="primary" @click="handleEdit">编辑</el-button>
    <el-button @click="handleExportPdf">导出PDF</el-button>
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
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'

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
    },
    handleExportPdf(){
    const pdf = new jspdf('', 'pt', 'a4')
    const target = document.querySelector('.resume-container')

    const clonedTarget = target.cloneNode(true);
    clonedTarget.querySelectorAll('.el-button').forEach((button) => {
      clonedTarget.removeChild(button)
    })
    document.body.appendChild(clonedTarget)
    html2canvas(clonedTarget).then((canvas) => {

      document.body.removeChild(clonedTarget)

      const contentWidth = canvas.width
      const contentHeight = canvas.height

      //一页pdf显示html页面生成的canvas高度;
      const pageHeight = (contentWidth / 595.28) * 841.89
      //未生成pdf的html页面高度
      let leftHeight = contentHeight
      //页面偏移
      let position = 0
      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      const imgWidth = 595.28
      const imgHeight = (592.28 / contentWidth) * contentHeight

      const pageData = canvas.toDataURL('image/jpeg', 1.0)
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        // 为下一条数据添加空白页
      } else {
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          //避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage()
          }
        }
      }
      pdf.save('简历.pdf')
    })
    },
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