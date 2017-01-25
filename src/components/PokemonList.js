import React, {Component} from 'react'
import List from './List'


export default class PokemonList extends Component {

  renderList(){
    return this.props.data.map((current,idx) => {
     return (<List
               pkobj={current}
               key={current.name}
               id={idx + 1}
               onePoke={this.props.onePoke}
             />
     );
   });
  }

  render() {
    return (
      <ul className="list-container">
          { this.renderList() }
      </ul>
    )
  }
}
