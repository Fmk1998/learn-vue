<template>
  <div class="todo_body">
    <zh_header></zh_header>
    <h2 class="display-3">TODO LIST <span>总共 <strong>{{list.length}}</strong>
      个任务，已完成 <strong>{{doneCount()}}</strong>
      个</span></h2>
    <div class="todo_todolist">
      <TodoLists :dataSource="zhanshilist" @add="getNewDataList" @change="getChangeDataList"
                 @del="getDelDataList"></TodoLists>
    </div>
    <div class="todo_floor">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          current-page.sync="currentPage"
          layout="total,  prev, pager, next, jumper"
          total.sync="totalPage">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  //导入组件
  import TodoLists from '@/components/TodoList';
  import { QUERYDATALIST } from '../store/mutation-types';
  import Zh_header from '../components/zh_header';

  export default {
    name: 'Todo',
    components: {
      Zh_header,
      TodoLists,
    },
    data() {
      return {
        url: 'http://127.0.0.1:8899/',
        list: [],//所有数据
        zhanshilist: [],//当前页显示内容
        totalPage: 2,// 统共页数，默认为1
        currentPage: 1,//当前页数 ，默认为1
        pageSize: 5// 每页显示数量
      };
    },
    async created() {
      // this.fetch();
      console.log(this.$store);
      await this.$store.dispatch('QUERYDATALIST', {
        url: this.url
      });
      // debugger
      // 渲染view
      this.init();
    },
    methods: {
      init() {
        this.list = this.$store.state.todo.list;
        // 计算一共有几页
        this.totalPage = Math.ceil(this.list.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        this.getCurrentPageData();
      },
      getNewDataList(info) {
        this.$store.dispatch('ADDEVENT', info);
        this.init();
      },
      getChangeDataList(info) {

        console.log('来自子组件的值：', info);
        this.$store.dispatch('EVENTDONE', info);
        this.init();
      },
      getDelDataList(info) {
        console.log('来自子组件的值：', info);
        // 第二次赋值
        this.$store.dispatch('DELEVENT', info);
        this.init();
      },
      doneCount() {
        // 使用filter来实现
        const temp = this.list.filter(function (item) {
          return item.done;// 返回true表示当前的数据满足条件，事件已完成

        });
        return temp.length;
      },
      getCurrentPageData() {
        let begin = (this.currentPage - 1) * this.pageSize;
        let end = this.currentPage * this.pageSize;
        this.zhanshilist = this.list.slice(
          begin,
          end
        );
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.init();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.init();
      }
    }
  };
</script>

<style lang="less">
  .todo_body {
    height: 100%;
    background: #fbfbfb;
  }
  .todo_todolist{
    height: 500px;
  }

  .todo_floor {
    margin: 20px 10px 10px 500px;
  }
</style>
