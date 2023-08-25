import React from 'react'
import Itemlist from './Itemlist';
const Content = ({lists,handleCheck,handleDelete}) => {
    
  return (
    <main className='Content'>
       {lists.length?(
        <Itemlist
        lists = {lists}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      ):(
        <p style={{marginTop:'2rem'}}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content
