import React from 'react';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Recipes from './Recipes';
import Schedule from './Schedule';
import Favorites from './Favorites';
import Tabs from './Tabs.js';
import './Base.css';

const Base = () => {

    return (
        <div id="base">
           <div className='bookmark'>
      </div>
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
