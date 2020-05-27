import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Media extends Component {
  render() {

    const { mediaData } = this.props

    return (
        <div className="media">
          <Link to={mediaData.mediaLink}>
            <figure className="media-left">
              <p className="image is-64x64">
                <img src={mediaData.mediaImg} alt={mediaData.mediaAlt} />
              </p>
            </figure>
          </Link>

          <div className="media-content">
            <div className="content">
              <p>
                <Link to={mediaData.mediaLink}><strong>{mediaData.mediaTitle}</strong></Link>
                <br/><small>{mediaData.mediaSubtitle}</small>
                <br />
                {mediaData.mediaContent}
              </p>
            </div>
          </div>
          <div className="media-right">
            <Link to={mediaData.mediaLink}>
              <button className="button is-small is-warning">Veja mais</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default Media
