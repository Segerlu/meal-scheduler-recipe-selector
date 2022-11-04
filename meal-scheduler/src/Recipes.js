import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import './Recipes.css';
import Page from './inside-book/Page'
import secrets from './secrets.json'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const Recipes = ({ tags }) => {

  let [results, setResults] = useState([{
    display: 'No recipe matches the search criteria',
    search_value: 'empty',
    type: 'default'
  }])

  let [value, setValue] = useState('carrot');

    useEffect(() => {

      console.log('fetching')
      fetch(url + value)
      .then(data => data.json())
      .then(jsonData => {

        if (jsonData.meals) {
          console.log('fetched: ',jsonData.meals)
          setResults(jsonData.meals)
        }
      })
      .catch(error => {
        console.log(error)
      })
    
  }, [value])    

  return (
    <>

    {/* <div className='category-select'>
      <Dropdown 
        className='dropdown'
        key={tags.idCategory + 15}
        value='Category'
        placeholder='Category'
        options={tags.map((type)=> type.strCategory)}
      />
    </div> */}

      <div className='book'>
        <div id='searchfield'>
          <input id='searchInput' placeholder='Search for recipes' onChange={(e)=>setValue(e.target.value)} />
        </div>
        
        <div id='pages'>
          
          <Page results={results} />
        </div>

      </div>
    </>
  )
}

export default Recipes
