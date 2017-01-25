import React, { Component } from 'react';
import PokemonList from './PokemonList'
import Single from './Single'
// import responsiveVoice from '../javascript/responsive-voice.js'
// import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pk : {},
      data : []
    }
  }

  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json())
      .then(response => {
        this.setState({
          data : response.results,
        });
        // responsiveVoice.speak('hello')

      });
  }


  onePoke(idx) {
    if (this.state.data[idx-1]){

      fetch(this.state.data[idx-1].url).then(res => res.json()).then(response => {
          this.setState({
            pk : response,
          })
        })
        fetch(this.state.pk.species.url).then(res => res.json()).then(response => {
          eval(`responsiveVoice.speak(response.flavor_text_entries[9].flavor_text)`)
      })
    } else {
      return;
    }
  }


  render() {
    // console.log(this.state.pk)

    return (
        <div className="App">
          <h1> The Everyday PokeDex! </h1>
          <div className="pokedex">
            <PokemonList
              data={this.state.data}
              pk={this.state.pk}
              onePoke={this.onePoke.bind(this)}
            />
            <Single pkData={this.state.pk} />
          </div>
        </div>
    );
  }
}

export default App;
