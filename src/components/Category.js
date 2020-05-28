import React, { Component } from 'react';
import tmdb, {tmdbParams} from '../apis/tmdb.js'

import Movie from './Movie.js'
import Tv from './Tv.js'
import Person from './Person.js'
import Navbar from './Navbar.js'

function SwitchCategory(props) {
  switch (props.category) {
    case 'movie':
      return <Movie data={props.data} isLoading={props.isLoading} />

    case 'tv':
      return<Tv data={props.data} isLoading={props.isLoading} />

    case 'person':
      return <Person data={props.data} isLoading={props.isLoading} lastMovie={props.lastMovie} />

    default:
      alert('Ocorreu um erro')
      return <p>Contacte o administrador</p>
  }


}

class Category extends Component {
	constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      error: false,
      id: this.props.match.params.id,
      category: this.props.match.url.split('/')[1]
    };

  }

   async componentDidMount() {
    let posterURL = ''
    let posterOrProfile
    let lastMovie = {}

    tmdb.get(`${this.state.category}/${this.state.id}`, {
      params: {
        ...tmdbParams,
      }
    })
    .then( response => {
      posterOrProfile = response.data.poster_path || response.data.profile_path
      posterURL = (posterOrProfile) ? `https://image.tmdb.org/t/p/w500${posterOrProfile}` : "/unavailable.jpg"

      response.data.poster_url = posterURL

      if (this.state.category === "person") {
        tmdb.get(`person/${this.state.id}/movie_credits`, {
          params: {
            ...tmdbParams,
          }
        })
        .then( response => {
          lastMovie = response.data.cast.reduce((el1, el2 ) => {
            if (Date.parse(el1.release_date) > Date.parse(el2.release_date)) {
              return el1
            }
            return el2
          })

          // console.log(lastMovie)

          this.setState({
            ...this.state, ...{
              last_movie: { ...lastMovie }
            }
          })

        })
        .catch (error => {
          alert("ocorreu um erro")
          console.log(error)
        })
      }

      // response.data.last_movie = lastMovie

      // console.log(response.data.last_movie)

      this.setState({
        ...this.state, ...{
          isLoading: false,
          data: response.data
        }
      })
    })
    .catch( error => {
      this.setState({
        ...this.state, ...{
          isLoading: false,
          data: error,
          error: true
        }
      })
    });

  }

  render() {
    return (
      <div>
        <Navbar />
        <SwitchCategory category={this.state.category} data={this.state.data} isLoading={this.state.isLoading} lastMovie={this.state.last_movie} />
      </div>
    )
  }
}

export default Category;
