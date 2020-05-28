import React, { Component } from 'react';
import Loading from './Loading.js'
import styled from 'styled-components'

const Img = styled.img`
  min-width:300px;
  width: 20vw;
  height: auto;
  padding: 1em;
  margin: 1em auto;
`

class Movie extends Component {
  render() {
    const data = this.props.data

    return (
      this.props.isLoading ? <Loading /> : 
      <section className="section columns container">
        <div className="column is-1-4">
          <figure>
            <Img src={data.poster_url} alt={data.title} />
          </figure>
        </div>

        <div className="column is-1-4 content">
          <h2>{data.title}</h2>
          <p><b>Lançamento</b>: {data.release_date}</p>
          <p><b>Avaliação</b>: {data.vote_average}</p>
        </div>
      </section>
    )
  }
}

export default Movie;
