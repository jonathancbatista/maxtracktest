import React, { Component } from 'react'

class Media extends Component {
  render() {

    const { mediaData } = this.props

    return (
        <div className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src={mediaData.mediaImg} alt={mediaData.mediaAlt} />
            </p>
          </figure>

          <div className="media-content">
            <div className="content">
              <p>
                <strong>{mediaData.mediaTitle}</strong> 
                <br/><small>{mediaData.mediaSubtitle}</small>
                <br />
                {mediaData.mediaContent}
              </p>
            </div>
          </div>

        </div>
    )
  }
}

export default Media
