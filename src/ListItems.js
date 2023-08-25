import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const ListItems = ({list,handleCheck,handleDelete}) => {
  return (
    <li className='list' >
    <input
      type = "checkbox"
      onChange={()=>{handleCheck(list.id)}}
      checked = {list.checked}
    />
    <label
      style = {(list.checked)?{textDecoration:'line-through'}:null}
      onDoubleClick={()=>handleCheck(list.id)}
    >{list.list}</label>
    <FaTrashAlt
     onClick={()=>handleDelete(list.id)}
     role= "button" 
     tabIndex = "0"
     aria-label={`Delete ${list.list}`}
     />
   </li>
  )
}

export default ListItems
