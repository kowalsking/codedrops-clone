import React from 'react'

const CodropsLogo = () => {
  const style = {
    width: '84px',
    margin: '11.5px 0 0 0',
    display: 'block'
  }
  return (
    <div className="branding">
      <a href="https://tympanus.net/codrops" className="logo">
        <img style={style} src="https://tympanus.net/codrops/wp-content/themes/codropstheme03/images/codrops-logo-1.svg" alt="Codrops Logo" />
      </a>
    </div>
  )
}

export default CodropsLogo