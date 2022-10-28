import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import './Recipes.css';
import Page from './inside-book/Page'
import secrets from './secrets.json'



const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&q=';
console.log(secrets.secrets)

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': secrets.secrets,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const Recipes = ({ tags }) => {
  let category = {};
  let categoryAr = [];
  let finalAr = {};
  function dealWithData() {

    tags.forEach(meal => {
      category[meal.type] = true;
    })

    categoryAr = Object.keys(category);

    categoryAr = [...categoryAr.filter(el => el.length < 12)]

    finalAr = categoryAr.map(el => {
      let obj = {};
      obj[el] = [];

      tags.forEach(item => {
        if (item.type === el) {
          obj[el].push(item.display_name);
        }
      })
      return obj;
    })

  }
  dealWithData();

  let [results, setResults] = useState([{
    display: 'No recipe matches the search criteria',
    search_value: 'empty',
    type: 'default'
  }])
  let [previousInput, setPreviousInput] = useState('')
  let input=document.getElementById('searchInput');

  let value = 'No Value';
  try {
    value = input.value ? input.value : 'No Value';
  } catch {
    console.log('Input not created yet')
  }
  
  try {
    useEffect(() => {

    if (previousInput === value) {
      console.log('skipped useEffect')
    } else {
      fetch(url + value, options)
      .then(data => data.json())
      .then(jsonData => {
        
        console.log('results',jsonData.results)
        setResults(jsonData.results)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [previousInput, input.value])
} catch {
    console.log('failed to fetch')
  }
  return (
    <>

      <div className='category-select'>
        {finalAr.map((mealType, index) => {
          return <div className="insideDiv" key={categoryAr[index]}>
            <Dropdown
              className='dropdown'
              key={categoryAr[index]}
              value={categoryAr[index]}
              placeholder={categoryAr[index]}
              options={mealType[categoryAr[index]]}
            />
          </div>
        })}
      </div>
      <div className='book'>
        <div id='searchfield'>
          <input id='searchInput' placeholder='Search for recipes' />
          <button id='searchButton' onClick={() => {
            console.log('value',value)
            setPreviousInput(value);
            }}>Search</button>
        </div>
        
        <div id='pages'>
          
          <Page results={results} />
        </div>

      </div>
    </>
  )
}

export default Recipes
