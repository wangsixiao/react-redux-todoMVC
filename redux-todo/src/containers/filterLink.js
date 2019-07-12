import {connect} from 'react-redux'
import {setFilterOptions} from '../actions'
import Link from '../components/link'
const mapStateToProps = (state,ownProps) => ({
    active:ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    onClick:() => dispatch(setFilterOptions(ownProps))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)