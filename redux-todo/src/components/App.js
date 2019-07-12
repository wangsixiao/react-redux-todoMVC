import React from 'react'
import AddTodo from '../containers/addTodo'
import TodoListContainer from '../containers/todoList'
import FilterContainer from '../containers/filter'
const App = () => (
    <div className="todoApp">
        <AddTodo />
        <TodoListContainer />
        <FilterContainer />
    </div>
)

export default App