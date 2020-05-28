import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Loading from './Loading.js'
import styled from 'styled-components'

const Img = styled.img`
  min-width:300px;
  width: 20vw;
  height: auto;
  padding: 1em;
  margin: 1em auto;
`
function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);

}

class Person extends Component {
  render() {

  	const data = this.props.data
  	const age = data && calculateAge(Date.parse(data.birthday))
  	const lastMovie = this.props.lastMovie 

    return (
      this.props.isLoading ? <Loading /> : 
      <section className="section columns container">
        <div className="column is-1-4">
          <figure>
            <Img src={data.poster_url} alt={data.name} />
          </figure>
        </div>

        <div className="column is-1-4 content">
          <h2>{data.name}</h2>
          <p><b>Idade:</b> {age}</p>
          <p><b>Último filme:</b> <Link to={ lastMovie && `/movie/${lastMovie.id}`}>{lastMovie && lastMovie.original_title}</Link></p>
        </div>
      </section>
    )
  }
}

export default Person;
