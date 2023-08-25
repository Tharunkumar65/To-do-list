import React from 'react'

const Header = ({title}) => {
  return (
    <div className='Header'>
        <h2>{title}</h2>
    </div>
  )
}

Header.defaultProps= {
    title :"Default Title"
}

export default Header
