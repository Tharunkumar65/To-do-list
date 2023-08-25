import React from 'react'

const Footer = ({length}) => {
     
  return (
    <footer>
        <h3> you have {length} todo {length===1?"List":"Lists"}</h3>
      </footer>
  )
}

export default Footer
