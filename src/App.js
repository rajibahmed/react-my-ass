import React, { Component } from 'react';
import './App.css';
import TopBar from './layout/TopBar.js';
import Footer from './layout/Footer.js';
import { BrowserRouter, Redirect, Match, Miss, Link } from 'react-router'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const NoMatch = ({ location }) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)

class App extends Component {
  render() {
    return (
	  <BrowserRouter>
		<section className="hero is-primary is-fullheight">
			<TopBar >
        <Link activeClassName="is-active" to="/home" className="nav-item">
          Home
        </Link>
        <Link activeClassName="is-active" to="/about" className="nav-item">
          About
        </Link>
        <Link activeClassName="is-active" to="/topics" className="nav-item">
          Topics
        </Link>
      </TopBar>

			<div className="hero-body">
				<div className="container has-text-centered">
          <Match pattern="/" exactly render={ () => (
              <Redirect to="/home"/>
          )}/>
				  <Match exactly pattern="/home" component={Home} />
				  <Match pattern="/about" component={About} />
				  <Miss component={NoMatch}/>
				</div>
			</div>
			<Footer />
		</section>
		  </BrowserRouter>
    );
  }
}

export default App;
