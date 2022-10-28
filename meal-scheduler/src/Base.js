import React from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Recipes from './Recipes';
import Search from './Search';
import Schedule from './Schedule';
import Favorites from './Favorites';
import Tabs from './Tabs.js';
import './Base.css';

const urlTags = 'https://tasty.p.rapidapi.com/tags/list';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '505f9bda9dmshb8ad895534ace8dp13e0f7jsn5f25c339af9e',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const Base = () => {

    let [tags, setTags] = useState(['No Tags']);

    if (tags[0] === 'No Tags') {

      
      fetch(urlTags, options)
      .then(res => res.json())
      .then(results => {
        console.log('got tags')
        setTags(results.results);
      })
      .catch(error => {
        console.log(error);
      })
    }

    return (
        <div id="base">
            <BrowserRouter>
            <Tabs />
                <Routes>
                    {<Route path='/' element={<></>} />}        
                    {<Route path='/home' element={<></>} />}
                    {<Route path='/recipes' element={<Recipes tags={tags}/>} />}
                    {<Route path='/search' element={<Search />} />}
                    {<Route path='/schedule' element={<Schedule />} />}
                    {<Route path='/favorites' element={<Favorites />} />}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Base
