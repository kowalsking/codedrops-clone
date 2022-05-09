import React from 'react'
import CodropsLogo from './CodropsLogo'
import SearchIcon from './SeachIcon'
import NavList from './NavList'

const Navigation = () => {
  return (
    <header className="mainHeader">
      <CodropsLogo />
      <NavList />
      <div className="blankContainer"></div>
      <SearchIcon />
    </header>
  )
}

export default Navigation