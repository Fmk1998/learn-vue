import * as type from './mutation-types';
import { queryTodoListData } from '../service/todoService';
import de from 'element-ui/src/locale/lang/de';

// model
export default {
  // namespace:true,
  state: {
    list: []  //渲染的数据，返回给view层
  },
  // 同步修改
  mutations: {
    //第一个参数是state，第二个参数state的值等于什么
    [type.QUERYDATALIST](state, data) {
      // 函数体 执行复制操作
      state.list = data;
      console.log(state.list)
    },
    [type.ADDEVENT](state, data) {
      // 函数体 执行复制操作
      state.list.push( data )
      console.log(state.list)
    },
    [type.EVENTDONE](state, data){
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].text === data.text) {
          state.list[i].done = !state.list[i].done;
          break;
        }
      }
    },
    [type.DELEVENT](state, data){
      for (let i = 0; i < state.list.length; i++) {
        if (state.list[i].text === data.text) {
          state.list.splice(i, 1);
          break;
        }
      }
    },
  },
  // 异步commit提交
  actions: {
    // 到此为止， Vuex数据的修改已经完成
    // 数据从哪里来
    //数据与服务器交互
    //页面与数据交互
    async [type.QUERYDATALIST]({ commit }, payload) {
      const { data } = await queryTodoListData(payload.url);
      console.log(data.list);
      commit(type.QUERYDATALIST, data.list);//预留的数据
    },
    [type.ADDEVENT]({ commit }, data) {
      commit(type.ADDEVENT,data);
    },
    [type.EVENTDONE]({ commit }, data) {
      commit(type.EVENTDONE,data);
    },
    [type.DELEVENT]({ commit }, data) {
      commit(type.DELEVENT,data);
    },
  }
};
