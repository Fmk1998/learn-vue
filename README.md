### 说明
> 基于Vue3+VueX+nodejs+Element实现的一个仿知乎项目

>有四个基本模块：登录、TodoList、CardList、专栏

>登录用户名不为空，密码与二次密码相同即可

>数据来源：知乎
### 功能说明
- 支持添加删除事件
- 支持事件状态切换
- 事件的统计与分页
- card的显示
- 专栏card的点击切换功能
- 登录页面的简单效验

### 运行步骤
```
# 克隆到本地
git clone https://github.com/Fmk1998/learn-vue.git

# 进入文件夹
cd learn-vue

# 安装依赖
npm install 或 yarn(推荐)

# 开启NodeJs mock本地Json数据
#运行在localhost:8899
node mock/Data.js
或者
nodemon mock/Data.js

# 开启本地服务器localhost:8080
npm run serve
```

### 功能截图
1.登录
普通的登录效验
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191122092225515.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZtazEwMjM=,size_16,color_FFFFFF,t_70)
2.首页
cartlist显示
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191122091341372.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZtazEwMjM=,size_16,color_FFFFFF,t_70)
3.todolist
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019112209181882.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZtazEwMjM=,size_16,color_FFFFFF,t_70)
4.专栏
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191122092106917.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ZtazEwMjM=,size_16,color_FFFFFF,t_70)
### 主要难点
#### 1. 分页
分页逻辑想了很长时间，因为对Element组件不太熟悉，不知道该如何去使分页组件显示该有的数据。去网上找到了.sync方法来做交互，虽然解决了一些问题，但还是存在不足。
#### 2. 父子间组件的通信
#### 3. 搜索栏的推荐搜索
#### 4. 本地仓库事件的增删改

### 总结
第一次使用Vue做前端Demo，从一开始的一头雾水，到中间不断摸索，发现了许多前端我以前不太会的知识，从中也收获经验，还是要感谢老师的帮组，能够让我引入一门不错的技术，这个demo许多地方还是做得不太满意，比如分页的逻辑，搜索框，一些card的排版问题，还是要慢慢学习。


