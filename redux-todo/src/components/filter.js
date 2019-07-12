import React from 'react'
import FilterLink from '../containers/filterLink'
import {FilterOptions} from '../actions'
debugger
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