import {FilterOptions} from '../actions'

const filter = (state = FilterOptions.SHOW_ALL,action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter.filter //filter 包含了children filter
        default:
            return state
    }
}

export default filter