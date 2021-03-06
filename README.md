# React-login
### 安装:
> npm install
 npm start
 cd client
 rm yarn.lock && yarn install
 yarn start
 createdb reduxlogin
 knex migrate:latest

- 前端: React+ redux React + route 路由

- 后端: node.js
- 数据库: postgresql / (mysql),  knex无缝切换数据库
- 认证: localStorage本地存储 没有用cookies
  JWT(json web token)

-----------

###### 前端代码 -> client
###### 后端代码 -> server
> express: 基于nodejs实现是后端框架,可实现后端代码,为前端提供API <br>
> babel: 解析 es6无法解析后端代码问题<br>
> route: 路由


注意：client中开启的命令为：npm start</br>
在server中开启的命令：npm start；这个是直接在整个项目下进行npm start命令便可</br>
因为配置了：

```shell
"start": "nodemon --watch server --exec babel-node -- server/index.js"</br>
```

nodemon是为了前端刷新时候实时刷新不用重启的一个配置</br>
fork运行执行(立即执行) ...是ES6的展开运算符
</br>


#### 1、在整个项目目录下</br>
创建server和client两个包分别放置server和前端代码；</br>
整个项目根目录下执行下面两个创建json目录进行项目初始化以及安装express框架

```shell
npm init -y</br>
npm install express --save
```

#### 2、如何解决ES6语法转化问题？</br>
安装babel;babel是用于ES6语法解析,babel网址：https://babel.bootcss.com/</br>
npm install --save-dev babel-cli babel-preset-env</br>
创建 .babelrc 文件</br>

```shell
{
  "presets": ["env"]
}
```

之后在package.json中添加

```shell
"start": "babel-node server/index.js"
```

#### 3、如何解决修改代码之后刷新不能立即生效问题？</br>
npm install nodemon --save-dev</br>
然后package.json中配置改为 "start": " nodemon --watch server --exec babel-node -- server/index.js"</br>
</br>
</br>
#### 4、前端页面布局开始</br>
引入bootstrap，在index.html中

```shell
<link href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"></br>
```

bootstrap用到的样式网址：https://getbootstrap.com/docs/4.3/examples/navbars/</br>

#### 5、添加引入路由的库</br>

```shell
npm install react-router-dom --save
```

#### 6、安装axios用于发送请求;post数据等</br>

```shell
npm install axios
```

#### 7、在全局的安装body-parser</br>

```shell
npm install body-parser --save
```

并在server中的index中引用body-parser</br>

```shell
import bodyParser from 'body-parser';
app.use(bodyParser.json());
```

#### 8、在client的package.json中添加 "proxy": "http://localhost:6060"</br>

#### 9.注意clone下来之后在整个项目目录下面添加.babelrc文件，里面加上</br>

```shell
{
    "presets": ["env"]
}
```

#### 10、用于做表单前段过滤验证的js库</br>
https://github.com/chriso/validator.js</br>
整个项目安装validator库

```shell
npm install validator --save
```

#### 11.整个项目下安装lodash库(安装lodash用其中的isEmpty方法(详情见users.js中))</br>

```shell
npm install lodash --save

import isEmpty from 'lodash/isEmpty';
```

#### 12.此点结合10和11；主要是怎样进行为空错误处理</br>
后端接收前台传过来的请求；对应的URL定位到register的</br>
</br>
#### 13.整个项目安装classnames库；来解决表单错误提示时候是否明显问题；即作用为，动态改变控制节点的className属性来改变其样式(见signupForm中实例)

```shell
npm install classnames
import classnames from 'classnames';
className={classnames('form-control',{'is-invalid':errors.username})}
```

解释：is-invalid这个className的值是errors.username;当errors.username存在时候为true这个clasName存在；当errors.username不存在，那么这个is-invalid也是为false不显示的</br>

#### 14、做注册跳转：</br>
方法一:是直接通过其父组件拿到其history的属性；然后push到上一个页面即:

```shell
//signupPage中
<SignupForm history={this.props.history} userSignupRequest={this.props.userSignupRequest}/>
//signupForm中,在form表单请求返回中，返回成功的话就push定位到上一个历史记录即login等界面
this.props.userSignupRequest(this.state).then(
    () => {
        this.props.history.push('/');
    },
    ({response}) => {
        this.setState({errors:response.data,isLoading:false})}
);
```

方法二:SignupForm中直接引入withRouter；然后再在导出的时候使用withRouter这个方法

```shell
import {withRouter} from 'react-router-dom';

export default withRouter(SignupForm);

//push部分的代码不变
this.props.userSignupRequest(this.state).then(
    () => {
        this.props.history.push('/');
    },
    ({response}) => {
        this.setState({errors:response.data,isLoading:false})}
);
```

方法三：取出上下文

```shell
import PropTypes from 'prop-types';

static propTypes = {
    router:PropTypes.object
}
```
