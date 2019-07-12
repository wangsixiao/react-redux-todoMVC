# react-redux-todoMVC
redux的todo实例  
### 1、启动  
clone之后，npm install，下载需要的包，进入到文件夹中，执行npm start  

### 2、Provider  
使用Provider使组件层级中的 connect() 方法都能够获得 Redux store  

### 3、containers文件 
containers里获取组件需要的state，以及对组件需要的事件方法进行dispatch，使用connect传给组件模块  
例如： 
todo实例底部筛选区，ALL ACTIVE COMPLETED  
mapStateToProps方法定义一个activeCount字段，取得勾选的列表条数  
mapDispatchToProps方法定义组件内需要的方法，全部删除方法，dispatch出去，allDelete是action里定义的
```java
const mapStateToProps = (state,ownProps) => ({
    activeCount:state.todos.reduce(function(total,todo){
        return todo.completed ? total : total+1
    },0)
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    allDelete:() => dispatch(allDelete())
})
const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)

export default FilterContainer
```
  
### components
components是拆分的组件模块  
函数参数都是在containers定义好的，直接使用  
```java  
import React from 'react'
import FilterLink from '../containers/filterLink'
import {FilterOptions} from '../actions'
const Filter = ({activeCount,allDelete}) => (
    <footer>
		<span className="itemMount">{activeCount} {activeCount > 1 ? 'items' : 'item'} left</span>
        <ul>
            <FilterLink filter={FilterOptions.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={FilterOptions.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={FilterOptions.SHOW_COMPLETED}>Completed</FilterLink>
        </ul>
        <a className="clearAll" style={{display:(activeCount > 0) ? "inline-block" : "none"}} onClick={allDelete}>all delete</a>
    </footer>
)

export default Filter  
```
