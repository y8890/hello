<template>
  <div v-if="finalList.length">
    <template v-if="level == 4">
      <el-row  v-if="editing" >
        <el-col :span="22">
          <el-input :modelValue="modelValue" @input="handleTitleInput">
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-row align="middle" style="height:100%;">
            <AddAndDelete
            @add="$emit('addPro')"
            @delete="$emit('deletePro')"/>
          </el-row>
        </el-col>
      </el-row>
      <h4 class="project-titie" v-else>{{ title }}</h4>
    </template>
    <h2 class="block-title" v-else>{{ title }}</h2>
    <ul :class="editing ? 'editing':''" >
      <li v-for="(item,index) of finalList" :key="index">
        <el-row
          v-if='editing'
        >
        <el-col
        :span="22"
        >
          <el-input 
            :model-value="item" 
            @input="handleInput(index,$event)"
          />
        </el-col>
        <el-col 
        :span="2"
        >
        <el-row align="middle" style="height:100%;">
          <AddAndDelete 
          @add="handleAdd(index)"
          @Delete="handleDelte(index)"/>
        </el-row>
        </el-col>
      </el-row>
      <el-row  v-else>
        <span>{{ item }}</span>
      </el-row>
      </li>
    </ul>
  </div>
</template>
import A from './'
<script>
import AddAndDelete from './AddAndDelete.vue'
export default {
  props: ['list', 'title', 'level','editing','modelValue'],
  emits:['addPro','deletePro'],
  components:{
    AddAndDelete,
  },
  computed :{ 
      finalList(){
        if(this.innerList.length){
     return this.innerList
    }
    if(this.editing){
      return ['']
    }return []
      },
  },
  data() {
  return{
    innerList: this.list,
  }
  },
  methods:{
    handleTitleInput(value){
      this.$emit('update:modelValue',value)
    },
    handleInput(index, event){
      console.log(index, event)
      this.innerList[index] = event
    },
    handleAdd(index){
      this.innerList.splice(index + 1 , 0 ,'')
    },
    handleDelte(index){
      this.innerList.splice(index,1 ,)
      // if(this.innerList.length === 0){
      //   this.innerList.push('')
      // }
    },
  },
}

</script>

<style scoped>
h1,
h2,
h3,
h4 {
  color: #409eff
}
h2{
  margin: 20px 0;
}
h3{
  margin: 18px 0;
}
h4{
  max-width: 21px 0;
}
ul{
  margin: 16px 0;
  padding-left:40px;
}
ul.editing li {
  margin-bottom: 8px;
}

</style>