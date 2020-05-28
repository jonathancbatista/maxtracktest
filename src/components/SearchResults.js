import React, { Component } from 'react'
import Media from './Media.js'

class SearchResults extends Component {

  render() {

    const { filmData } = this.props

    const resultsList = filmData.map((film, index) => {

      film.img = (film.poster_path || film.profile_path) ? "https://image.tmdb.org/t/p/w92" + (film.poster_path || film.profile_path) : `${process.env.PUBLIC_URL}/unavailable.jpg`
      film.displayTitle = film.title || film.name

      const mediaData = {
        mediaImg:  film.img,
        mediaAlt: `${film.displayTitle} Poster`,
        mediaTitle: film.displayTitle,
        mediaSubtitle: film.media_type,
        mediaContent: film.overview,
        mediaLink: `/${film.media_type}/${film.id}`,

      }

      return <Media mediaData={mediaData} key={index} />

    })

    return (
      <section className="section container content">
        { resultsList }
      </section>
    )
  }
}

export default SearchResults
