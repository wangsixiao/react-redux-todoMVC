import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addTodo} from '../actions'
class AddTodo extends React.Component{
    constructor(props,context){
        super(props,context) //context上下文环境 包含store
        // this.addTodo = node => {
        //     this.textInput = node //获取输入值
        // }
        this.textInput = ''
        this.OnKeyUp = this.OnKeyUp.bind(this)
    }
    // constructor(){
    //     super(...arguments)
    // }
    OnKeyUp = (e) => {
        let value = this.textInput.value
        if(e.keyCode === 13 && value.trim()){
            debugger
            this.props.onAdd(value)
            this.textInput.value = ''
        }
    }
    render(){
        return(
            <header className="header">
				<h1>todos</h1>
				<input className="newTodo" ref={node => this.textInput = node} placeholder="enter content" type="text" onKeyUp={this.OnKeyUp}/>
			</header>
        )
    }
}
AddTodo.propTypes = {
    onAdd:PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd:(value) => {
            dispatch(addTodo(value))
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)