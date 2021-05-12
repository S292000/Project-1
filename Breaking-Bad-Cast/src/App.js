import React, { useState , useEffect } from 'react';
import Header from './components/ui/Header'
import CharactersGrid from './components/characters/CharactersGrid'
import Search from './components/ui/Search'
import './App.css';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  
  useEffect(() => {

    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res => {
      if(!res.ok){
        throw new Error('Response not correct');
      }else{
         return res.json();
      }
    })
    .then(data => { 
      setItems(data);
      setIsLoading(false);
      
    })
    .catch(err => console.log(err));

    
    
  }, [query]);
  

  return (
    <div className="container">
      <Header />
      <Search getQuery={ (q) => setQuery(q) }/>
      <CharactersGrid  isLoading={isLoading} items={items}  />
    </div>
  );
}

export default App;
