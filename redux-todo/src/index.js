import React from 'react'
import {render} from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'
import reducer from './reducers'
// 获取存储的数据
const loadState = () => {
      const serializedState = localStorage.getItem('todoData4');
      if (serializedState === null) {
        return undefined;
      } else {
        return JSON.parse(serializedState);
      }
  }
const store = createStore(reducer,loadState())
// 保存
const saveState = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todoData4', serializedState);
}
// state每次更新都持久化一下 订阅state改变
store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
