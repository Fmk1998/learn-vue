<template>
  <div class="todo-lists">
    <div>
      <el-input class="todo_input" type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputTodoDate"></el-input>
      <el-button type="primary" @click="inputAddTodo">
        <slot></slot>
        ADD
      </el-button>
    </div>
    <div>
      <ol>
        <li v-for="(item,index) in dataSource" :key="index" class="del-todo-li">
          <span class="todo_items_xuhao">{{index+1}}</span>
          <div class="todo_item"><del class="todo_item todo_item_done" v-if="item.done" @click="finishHandler(item)">{{item.text}}</del>
            <span class=" todo_item_todo" v-else @click="finishHandler(item)">{{item.text}}</span>
            <el-button class="todo_items_del" type="danger" size="small" @click="inputDelTodo(item)">删除</el-button></div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoLists',
    props:{
      dataSource: Array,

    },
    data(){
      return {
        number:0,
        checked:false,
        inputTodoDate:''  //String
      };
    },
    created(){
      console.log(this.dataSource);
    },
    methods:{
      finishHandler(item){
        // item.done= !item.done;
        this.$emit('change',item);
      },
      inputAddTodo(){
        if(this.inputTodoDate.trim()!=""){
          this.$emit('add',{
            text:this.inputTodoDate,
            done:false
          });
        }else {
          this.$alert('请输入值');
        }
      },
      inputDelTodo(item){
        this.$emit('del',item);
      }

    }
  };
</script>

<style lang="less">
  .todo-lists{
    ul,li{
      list-style: none;
      margin: 0px 50px 0px 50px;
    }
    .del-todo-li{
      cursor: pointer;
      font-family: "Adobe Caslon Pro";
      font-size: 25px;
    }
    .todo_item{
      margin-top: 30px;
    }
    .todo_item_done{
      color: red;
    }
    .todo_input{
      width: 70%;
      margin: 0px 10px 0px 100px;
    }
    .todo_items{
      width: 100%;
      height: 60px;
      margin: 15px 10px 10px 20px;
      padding: 1px 5px 1px 1px;
    }
    .todo_items_del{
      float: right;
      margin: 1px 1px 1px 1px;
    }
    .todo_items_xuhao{
      float: left;
      margin: 1px 50px 1px 1px;
    }
    body {
      background: #fff;
    }
    li {
      list-style: none;
      height: 36px;
      width: 75%;
      line-height: 36px;
      padding: 0 5px;
      margin: 1px 1px 1px 50px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }
  }

</style>
