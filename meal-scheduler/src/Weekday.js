import React from 'react'
import { useState, useEffect } from 'react';
import Dropdown from 'react-dropdown';
import './Weekday.css'

const Weekday = ({ day, favorites, addMeal, value }) => {

  const [hover, setHover] = useState(false)
  useEffect(() => {
  }, [hover]);

  const mouseOver = () => {
    setHover(true)
  }
  const mouseOut = () => {
    setHover(false)
  }

  return (
    <div className='weekday'>

      <h3 className='day'>{day}</h3>
      {<div className={hover ? 'selected-meal' : 'meal-select'} onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <Dropdown
          onChange={(e)=>{
            addMeal(day,e.value)
            //add meal to array
          }}
          value={value}
          className='dropdown'
          placeholder='Please select a meal'
          options={favorites.map((meal) => meal.name)}
        />
      </div>}

      
    </div>

    
  )
}

export default Weekday
