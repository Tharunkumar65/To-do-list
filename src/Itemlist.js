import React from 'react'
import ListItems from './ListItems'
const Itemlist = ({lists,handleCheck,handleDelete}) => {
  return (
      <ul>
        {lists.map((list)=>(
           <ListItems
            key = {list.id}
            list = {list}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
           />
        ))}
      </ul>
  )
}

export default Itemlist

