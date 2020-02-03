import React, { Component } from 'react';
import Pokedex from './Pokedex'

class Pokegame extends Component {
    randomPokemons = (arr) => {
        let newArr = []
        let visited = {}
        let num
        while (true) {
            num = Math.floor(Math.random() * arr.length)
            if (!visited[num]) {
                visited[num] = (visited[num] || 0) + 1
                newArr.push(arr[num])
            }
            if (newArr.length === arr.length) break
        }
        return newArr
    }
    render() { 
        let rPokemons = this.randomPokemons(this.props.pokemons)
        let index = Math.floor(rPokemons.length/2)
        
        let firstHand = rPokemons.slice(0, index)
        let firstHandTotal = firstHand.reduce((sum, num) => {
            return sum + num.base_experience
        }, 0)
        
        let secondHand = rPokemons.slice(index)
        let secondHandTotal = secondHand.reduce((sum, num) => {
            return sum + num.base_experience
        }, 0)

        const isWinner = (t1, t2) => {
            if (t1 > t2) return true
            else return false
        }

        return (
            <div>
                <Pokedex pokemons={firstHand} total={firstHandTotal} isWinner={isWinner(firstHandTotal, secondHandTotal)}/>
                <Pokedex pokemons={secondHand} total={secondHandTotal} isWinner={isWinner(secondHandTotal, firstHandTotal)}/>
            </div>
        )
    }
}

export default Pokegame;