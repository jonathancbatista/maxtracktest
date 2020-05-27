import React, { Component } from 'react'
import tmdb from '../apis/tmdb.js'
import { tmdbParams } from '../apis/tmdb.js'
import axios from 'axios'

class HomeSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e){
    this.setState({query : e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()

    tmdb.get('search/multi', {
      params: {
        ...tmdbParams,
        query: this.state.query,
        page: 1,
        include_adult: false,
      }
    })
    .then( response => {
      this.props.handleSubmit(response.data.results)
    })
    .catch( error => {
      console.log(error)
    });

  }

  render() {
    return (
      <section className="section columns">
        <div className="column">
          <div className="container has-text-centered content">
            <h5>Busque um filme, série ou artista</h5>
              <form className="form" onSubmit={ this.handleSubmit }>
                <div className="field has-addons has-addons-centered">
                  <div className="control">
                    <input onChange={this.updateInput} className="input is-medium is-rounded" type="text" name="busca" placeholder="Digite algo..." />
                  </div>
                  <div className="control">
                    <input className="button is-warning is-medium is-rounded" type="submit" value="Buscar" />
                  </div>
                </div>
              </form>
          </div>
        </div>
      </section>
    )
  }
}

export default HomeSearch