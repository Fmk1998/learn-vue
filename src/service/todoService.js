import axios from 'axios';
//函数请求的方法
// 封装请求的函数
export const queryTodoListData = url => axios.get(url);
