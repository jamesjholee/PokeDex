import React, {Component} from 'react';

export default class Single extends Component {

  render() {
    let { pkData } = this.props
    if (Object.keys(pkData).length === 0) {
      return <div></div>
    }else{

      return(
      <div className="POKEMON">
        <img className="solo-pic" src={pkData.sprites.front_default} role="presentation"/>
        <h3 className="solo-name">{pkData.name.toUpperCase()}</h3>
        <ul className="list">
          <li className="attr" >HEIGHT: {Math.round(pkData.height * .328084 * 10)/10} ft</li>
          <li className="attr" >WEIGHT: {Math.round(pkData.weight * .220462 * 10)/10} lbs</li>
          <li className="attr" >HP: {pkData.stats[5].base_stat}</li>
          <li className="attr" >ATK: {pkData.stats[4].base_stat}</li>
          <li className="attr" >DEF: {pkData.stats[3].base_stat}</li>
          <li className="attr" >SPD: {pkData.stats[0].base_stat}</li>
        </ul>
      </div>
    )}
  }
}
