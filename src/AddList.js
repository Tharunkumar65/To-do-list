import React from 'react'
import {FaPlus} from 'react-icons/fa';
import { useRef } from 'react';
const AddList = ({newList,setNewList,handleSubmit}) => {
    const inputRef = useRef();
    return (
    <form className='addForm' onSubmit={handleSubmit}>
    <label htmlFor='addList'>Add List</label>
    <input
       autoFocus
       ref = {inputRef}
       id= 'addList'
       type = 'text'
       placeholder='Add List'
       required
       value = {newList}
       onChange={(e)=>setNewList(e.target.value)}
    /> 
    <button
      type ='submit'
      aria-label='Add Item'
      onClick={()=>inputRef.current.focus()}
    >
        <FaPlus/>
    </button>

    </form>
  )
}

export default AddList
