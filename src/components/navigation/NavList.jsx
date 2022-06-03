import React from 'react'

const NavList = () => {
  const navRawList = ['playground', 'tutorials', 'articles', 'collective', 'css reference']
  const navList = navRawList.map((element, index) => {
    return (
      <li className='navListItem' key={index}>
        <a href="/">
          {element}
        </a>
      </li>
    )
  })
  return (
    <nav className="navigationMenu">
      <ul>
        {navList}
      </ul>   
    </nav>
  )
}

export default NavList