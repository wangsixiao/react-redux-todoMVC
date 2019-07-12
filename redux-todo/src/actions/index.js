let nextItemId = 0
// 添加
debugger
export const addTodo = value => ({
    type:'ADD_TODO',
    id:nextItemId++,
    value
})

// 勾选
export const toggleTodo = id => ({
    type:'TOGGLE_TODO',
    id
})
export const onToggleAll = (e) => ({
    type:'TOGGLE_ALL',
    status:e.target.checked
})
// 删除
export const onDeleteEle = id => ({
    type:'DELETE_ELE',
    id
})
// 修改
export const doubleClickHandle = id => ({
    type:'MODIFY_ISCHOOSE',
    id
})
export const modifyItemHandle = todo => ({
    type:'MODIFY_TODO',
    todo
})

// footer筛选
export const FilterOptions = {
    SHOW_ALL :'SHOW_ALL',
    SHOW_ACTIVE:'SHOW_ACTIVE',
    SHOW_COMPLETED:'SHOW_COMPLETED'
}

export const setFilterOptions = filter => ({
    type:'SET_VISIBILITY_FILTER',
    filter
})

export const allDelete = () => ({
    type:'ALL_DELETE'
})
