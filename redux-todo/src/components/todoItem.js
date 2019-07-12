import React from 'react'
import PropTypes from 'prop-types'

let TodoItem = ({ onClick, onDeleteHandle,doubleClickHandle,modifyItemHandle,completed, value,isChoose }) => {
    let textInput
    debugger
    return(
        <li className={isChoose ? 'editing' :''}>
            <div className="view">
                <input type="checkbox" className="toggle" 
                    checked={completed} 
                    onChange={onClick}
                />
                <label 
                    onDoubleClick={doubleClickHandle}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}
                >{value}</label>
                <button className="deleEle" onClick={onDeleteHandle}></button>
            </div>
            <input type="text" className="editInput" 
                placeholder="enter value" autoFocus={true}
                ref = {node => textInput = node}
                defaultValue={value} 
                onKeyUp={
                    (e)=>{if(e.keyCode === 13 && textInput.value.trim()){
                        modifyItemHandle(textInput.value)
                    }}
                }
                // onBlur={doubleClickHandle}
            />
        </li>
    )
}
TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
}
export default TodoItem
