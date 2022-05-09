import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchIcon = () => (
  <span className="searchIcon">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </span>
)

export default SearchIcon