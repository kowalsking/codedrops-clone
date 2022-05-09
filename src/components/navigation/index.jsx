import React from 'react'
import CodropsLogo from './CodropsLogo'

const Navigation = () => {
  const navRawList = ['playground', 'tutorials', 'articles', 'collective', 'css reference']
  const navList = navRawList.map((element, index) => {
    return (
      <li className='navListItem' key={index}>{element}</li>
    )
  })

  return (
    <header className="mainHeader">
      <CodropsLogo />
      <nav>
        <ul>
         {navList}  
        </ul>        
      </nav>
    </header>
  )
}

export default Navigation