const todos = (state = [],action) => {
    debugger
    switch (action.type) {
        // 增加项
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:state.length > 0 ? state[state.length - 1].id + 1 : 0,
                    value:action.value,
                    completed:false,
                    isChoose:false
                }
            ]
        // 勾选
        case 'TOGGLE_TODO':
            return state.map(item => 
                (item.id === action.id) ? {...item,completed: !item.completed} : item
            )
        // 删除
        case 'DELETE_ELE':
            return state.filter(item => 
                item.id !== action.id
            )
        case 'MODIFY_ISCHOOSE':
            return state.map(item => 
                (item.id === action.id) ? {...item,isChoose: !item.isChoose} : item
            )
        case 'MODIFY_TODO':
            return state.map(item => 
                (item.id === action.todo.id) ? {...item,isChoose: !item.isChoose,value: action.todo.value} : item
            )
        case 'ALL_DELETE':
            return []
        case 'TOGGLE_ALL':
            return state.map(item => {
                return {...item,completed: action.status}
            }) 
        default:
            return state
    }
}

export default todos