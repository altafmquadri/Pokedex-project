import React, { Component } from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render() { 
        const {name, id, type, base_experience} = this.props.pokemon
        const changePadding = (num) => {
            return num.toString().padStart(3, 0)
        }
        return ( 
            <div className='Pokemon-card'>
                <div className='Pokemon-details'>
                    <h1>{name}</h1>
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${changePadding(id)}.png`}/>
                    <p>Type: {type}</p>
                    <p>Exp: {base_experience}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;