import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {onToggleAll,toggleTodo,onDeleteEle,doubleClickHandle,modifyItemHandle} from '../actions'
import TodoList from '../components/todolist'
import {FilterOptions} from '../actions'
const getChooseTodos = (todos,filter) => {
    debugger
    switch(filter){
        case FilterOptions.SHOW_ALL:
            return todos
        case FilterOptions.SHOW_ACTIVE:
            return todos.filter(item => !item.completed)
        case FilterOptions.SHOW_COMPLETED:
            return todos.filter(item => item.completed)
        default:
            throw new Error('unkown filter:' + filter)
    }
}

const mapStateToProps = state => {
    return {
        todos:getChooseTodos(state.todos,state.filter),
        activeCount:state.todos.reduce(function(total,todo){
            return todo.completed ? total : total+1
        },0)
    }
}
// 把action构造函数和prop
const mapDispatchToProps = dispatch => bindActionCreators({
        toggleTodo:toggleTodo,
        onDeleteEle:onDeleteEle,
        doubleClickHandle:doubleClickHandle,
        modifyItemHandle:modifyItemHandle,
        onToggleAll:onToggleAll
},dispatch)
// // prop到action的映射
// const mapDispatchToProps = {
//     toggleTodo:toggleTodo,
//     onDeleteEle:onDeleteEle,
//     doubleClickHandle:doubleClickHandle,
//     modifyItemHandle:modifyItemHandle
// }

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
    // null, {withRef: true}
)(TodoList)

export default TodoListContainer