import React from 'react';

let TopBar = (props) => {
	return (
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <div className="nav-left">
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
		{ props.children }
        </div>
      </div>
    </header>
  </div>
)
}

export default TopBar;
