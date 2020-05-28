import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <section className="section has-text-centered">
        <div className="loading"><div></div><div></div></div>
      </section>
    )
  }
}

export default Loading