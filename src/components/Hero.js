import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo.svg'

const Img = styled.img`
  min-width:300px;
  width: 70vw;
  height: auto;
  padding: 1em;
  margin: 1em auto;
`

class Hero extends Component {
  render() {
    return (
      <section className="section hero is-light">
        <div className="container content">
          <Link exact to ="/" className="title">
            <figure className="image">
              <Img src={logo} alt="The Movie Data Base" />
            </figure>
          </Link>
          <h2 className="subtitle is-4">
            Explore a maior base de Filmes e Séries do mundo.
          </h2>
        </div>
      </section>
    )
  }
}

export default Hero