import React from 'react';
import classNames from 'classnames';

export default class TopBar  extends React.Component {

  constructor(props){
    super(props)
    this.state = { menuIsActive: false }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(){
    this.setState({
      menuIsActive: !this.state.menuIsActive
    })
  }

  render() {
    let menuClass = classNames("nav-toggle", {
      "is-active": this.state.menuIsActive
    })

    let navItemsClass = classNames("nav-right", "nav-menu", {
      "is-active": this.state.menuIsActive
    })

    return (
      <div className="hero-head">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
            </div>
            <span className={menuClass}  onClick={this.toggleMenu} >
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className={navItemsClass} >
              { this.props.children }
            </div>
          </div>
        </header>
      </div>
    )
  }
}

