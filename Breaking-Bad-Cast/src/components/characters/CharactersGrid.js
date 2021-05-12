import React from 'react'
import Spinner from '../ui/Spinner'
import CharactersItem from './CharactersItem'


const CharactersGrid = ({isLoading, items}) => {

    
    return isLoading ? ( <Spinner /> ) : <section className="cards">
        {items.map((item) => {
           return <CharactersItem key={item.char_id} item={item} />
        })}
    </section>
}

export default CharactersGrid
