import React, { Component } from 'react';
import Hero from "./components/Hero.js"
import HomeSearch from "./components/HomeSearch.js"
import SearchResults from "./components/SearchResults.js"
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.handleHomeSubmit = this.handleHomeSubmit.bind(this);
    this.state = {
			loading: false,
			error: null,
			films: [],
		}
  }
	// state = {
	// 	loading: false,
	// 	error: null,
	// 	films: [],
	// }

	handleHomeSubmit(data) {
	  this.setState({ films: data })
	}

  render() {

  	const { films } = this.state

    return (
      <div className="App">
        <Hero />

        <HomeSearch handleSubmit={ this.handleHomeSubmit } />

        <SearchResults filmData={ films }  />

      </div>
    )
  }
}

export default App;
