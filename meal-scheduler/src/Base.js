import React from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Recipes from './Recipes';
import Schedule from './Schedule';
import Favorites from './Favorites';
import Tabs from './Tabs.js';
import './Base.css';
import secrets from './secrets.json'

const urlTags = 'https://www.themealdb.com/api/json/v1/1/categories.php';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': secrets.secrets,
//     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
//   }
// };

const Base = () => {

    // let [tags, setTags] = useState(['No Tags']);

    // if (tags[0] === 'No Tags') {
    //   fetch(urlTags)
    //   .then(res => res.json())
    //   .then(results => {
    //     console.log('got tags', results.categories)
    //     setTags(results.categories);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    // }

    return (
        <div id="base">
            <BrowserRouter>
            <Tabs />
                <Routes>
                    {<Route path='/' element={<div className='welcome'><h1>Welcome to the meal scheduler!</h1></div>} />}        
                    {<Route path='/home' element={<div className='welcome'><h1>Welcome to the meal scheduler!</h1></div>}  />}
                    {<Route path='/recipes' element={<Recipes />} />}
                    {<Route path='/schedule' element={<Schedule />} />}
                    {<Route path='/favorites' element={<Favorites />} />}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Base
