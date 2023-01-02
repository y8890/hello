<template>
  <div v-if="finalList.length">
    <template v-if="level == 4">
      <el-input v-if="editing" :modelValue="modelValue" @input="handleTitleInput"></el-input>
      <h4 class="project-tetie" v-else>{{ title }}</h4>
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
          <el-button 
            class="opt-btn" 
            style="margin-left:8px" 
            icon="Plus"
            type="primary"
            circle
            @click="handleAdd(index)">
          </el-button>
          <el-button
            class="opt-btn" 
            style="margin-left:8px"
            icon="Minus" 
            type="danger" 
            circle
            @click="handleDelte(index)">
          </el-button>
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

<script>
export default {
  props: ['list', 'title', 'level','editing','modelValue'],
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
.opt-btn {
 width: 20px;
 height: 20px;
}
</style>