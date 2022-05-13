import React from 'react'

const Main = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="subscribe">
          <div className="subscribe-form">
            <form>
              <h3>Subscribe for the latest frontend news</h3>
              <p>Stay up date with the latest web design and development news and relevant updates from Codrops.</p>
              <input type="email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="latest">
          Latest
          Latest
          Latest
          Latest
          Latest
          Latest
          Latest
          Latest
        </div>
        <div className="css-reference">
          Css reference
          Css reference
          Css reference
          Css reference
          Css reference
          Css reference
        </div>
      </div>
      <div className="content">
        Content
      </div>
      <div className="empty-container"></div>
    </div>
  )
}

export default Main;