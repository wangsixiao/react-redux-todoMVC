import {connect} from 'react-redux'
import {allDelete} from '../actions'
import Filter from '../components/filter'

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