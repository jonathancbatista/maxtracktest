import React, { Component } from 'react';
import { Link } from "react-router-dom"
import logo from '../media/logo.svg';
import styled from 'styled-components'

const NavLogo = styled.img`
  width:112px;
  height: auto;
  `

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
		    <Link className="navbar-item" to="/">
		      <NavLogo src={logo} />
		    </Link>

		    <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="upper-navbar">
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </button>
		  </div>

		  <div id="upper-navbar" className="navbar-menu">
		    <div className="navbar-start">
		      <Link to="/" className="navbar-item">
		        Home
		      </Link>
		    </div>
		  </div>
		</nav>
    )
  }
}

export default Navbar;
