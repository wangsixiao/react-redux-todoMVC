import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

// class TodoList extends React.Component{
//     constructor(props,context){
//         super(props,context) //context上下文环境 包含store
//         this.state = {
//             editLiClass:''
//         }
//     }
//     render(){
//         return(
//             <section>
//                 <input type="checkbox" className="toggleAll" checked={this.props.todos.length>0 && !this.props.activeCount} onChange={this.props.onToggleAll}/>
//                 <ul className="todoList">
//                     {this.props.todos.map(todo => (
//                         <TodoItem 
//                             key={todo.id} 
//                             {...todo} 
//                             onClick={this.props.toggleTodo.bind(this,todo.id)} 
//                             onDeleteHandle={this.props.onDeleteEle.bind(this,todo.id)}
//                             doubleClickHandle={this.props.doubleClickHandle.bind(this,todo.id)}
//                             modifyItemHandle={this.props.modifyItemHandle.bind(this,{id:todo.id,value:value})}
//                         />
//                     ))}
//                 </ul>
//             </section>
//         )
//     }
// }
const TodoList = ({ activeCount,todos, toggleTodo, onDeleteEle,doubleClickHandle,modifyItemHandle,onToggleAll }) => (
    <section>
        <input type="checkbox" className="toggleAll" checked={todos.length>0 && !activeCount} onChange={onToggleAll}/>
        <ul className="todoList">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    {...todo} 
                    onClick={() => toggleTodo(todo.id)} 
                    onDeleteHandle={() => onDeleteEle(todo.id)}
                    doubleClickHandle={()=>doubleClickHandle(todo.id)}
                    modifyItemHandle={(value)=>modifyItemHandle({id:todo.id,value:value})}
                />
            ))}
        </ul>
    </section>
  )

TodoList.propTypes = {
    toggleTodo:PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired).isRequired,
}

export default TodoList