import { useEffect } from "react"
import { useState } from "react"

function Title() {
    const [pokemon, setPokemon] = useState('')
    //hook onto mount
    // lets us do somethiing ONCE
    // when the component first comes into being
    useEffect( () => {
        let randPokemon = Math.floor(Math.random() * 1025)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randPokemon}`)
        .then(response => response.json())
        .then(pokemon => {
            setPokemon(pokemon.name)
        })
    }, [])

    return (
        <>
        <p className="text-black">SPLI</p>
        <p className="text-black">TTER</p>
        <p className="text-black">Your pokemon of the day is: {pokemon}</p>
        </>
    )
}

export default Title