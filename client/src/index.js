import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NavigationBar from './components/NavigationBar'
import * as serviceWorker from './serviceWorker';

import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension'; 

// 配合applyMiddleware解决redux异步问题
import thunk from 'redux-thunk'; 

 // 引入react-router-dom各种路由元素
import { BrowserRouter as Router } from 'react-router-dom'; 

import routes from './routes';

// createStore接受reducer生成stote compose合并生成store其他数据 applyMiddleware接受thunk解决redux异步问题
import { createStore, applyMiddleware } from 'redux'


import roorReducer from './reducers';

// Provider负责传递store
import { Provider } from 'react-redux' 


const store = createStore(
    roorReducer,
    composeWithDevTools(  
        applyMiddleware(thunk, logger)  //解决redux异步问题
    )
);

//页面渲染
ReactDOM.render(
    <Provider store = { store } >
         <Router>
             <div>
                <NavigationBar />
                { routes }
            </div>
         </Router>
    </Provider>,
    document.getElementById('root')
    );
serviceWorker.unregister();
