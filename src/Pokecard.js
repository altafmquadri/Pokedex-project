import React, { Component } from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render() { 
        const {name, id, type, base_experience} = this.props.pokemon
        return ( 
            <div className='Pokemon-card'>
                <div className='Pokemon-details'>
                    <h1>{name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                    <p>Type: {type}</p>
                    <p>Exp: {base_experience}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;