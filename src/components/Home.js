import React, { Component } from 'react';
import Hero from "./Hero.js"
import HomeSearch from "./HomeSearch.js"
import SearchResults from "./SearchResults.js"

class Home extends Component {
	constructor(props) {
    super(props);
    this.handleHomeSubmit = this.handleHomeSubmit.bind(this);
    this.state = {
			loading: false,
			error: null,
			films: [],
		}
  }

	handleHomeSubmit(data) {
	  this.setState({ films: data })
	}

  render() {


  	const { films } = this.state

    return (
      <div className="home">
      
        <Hero />

        <HomeSearch handleSubmit={ this.handleHomeSubmit } />

        <SearchResults filmData={ films }  />

      </div>
    )
  }
}

export default Home;
