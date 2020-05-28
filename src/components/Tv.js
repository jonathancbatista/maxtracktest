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

class Tv extends Component {
  render() {
    const data = this.props.data

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
          <p><b>Lançamento:</b> {data.first_air_date}</p>
          <p><b>Número de temporadas:</b> {data.number_of_seasons}</p>
        </div>
      </section>
    )
  }
}

export default Tv;