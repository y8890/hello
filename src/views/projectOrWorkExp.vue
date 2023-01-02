<template>
    <div class="work-exp-container" v-if="type === 'WORK'">
        <h2>工作经历</h2>
       <template
         v-for="item of data"
         :key="item.company"
       >
         <h3>{{ item.company }}</h3>
         <ResumeList 
           v-for="project of item.projects"
           :key="project.projectName" 
           :title="project.projectName" 
           :list="project.projectExp" 
           level="4" 
           :editing="editing"
         />
       </template>
    </div>
    <div class="pro-exp-container" v-else-if="type === 'PROJECT' &&(innerData.length || editing)">
        <h2>
          项目经历
          <AddAndDelete
            v-if="editing"
            :showDelete="false"
            @add="hanleaddPro(innerData.length)"
            />
        </h2>
         <ResumeList 
           v-for="(project,index) of innerData"
           :key="project.id"
           v-model="project.projectName" 
           :title="project.projectName" 
           :list="project.projectExp" 
           level="4" 
           :editing="editing"
           @addPro="hanleaddPro(index)"
           @deletePro="hanledeletePro(index)"
         />
   </div>
</template>

<script>
import ResumeList from './ResumeList.vue'
import AddAndDelete from './AddAndDelete.vue'
export default{
    data(){
        return{
            innerData:this.data,
        }
    },
    props:{
        editing: Boolean,
        data: Array,
        type: String,
    },
    components: {
    ResumeList,
    AddAndDelete,
  },
  methods:{
    hanleaddPro(index){
        this.innerData.splice(index + 1 , 0 ,{
            projectName:'',
            projectExp:[],
            id:new Date().getTime(),
        })
    },
    hanledeletePro(index){
        this.innerData.splice(index,1 ,)
    },
  }
}
</script>

<style>
h2 {
  border-bottom: 1px solid #409eff;
  margin: 20px 0;
}
h2,h3{
  color: #409eff
}
</style>