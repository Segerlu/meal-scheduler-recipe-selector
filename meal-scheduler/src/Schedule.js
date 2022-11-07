import React from 'react'
import { useState, useEffect } from 'react';
import './Schedule.css';
import Weekday from './Weekday';

const Schedule = () => {
  let url = "http://localhost:5555";
  var temp = {};
  let ingredients = {};

  const [favorites, setFavorites] = useState([{
    name: 'Nothing favorited',
    instructions: 'No instructions',
    thumbnail_url: 'No Thumbnail',
    video_url: 'No video',
    ingredients: 'No ingredients'
  }]);
  const [meals, setMeals] = useState({
    Monday1: {},
    Tuesday1: {},
    Wednesday1: {},
    Thursday1: {},
    Friday1: {},
    Saturday1: {},
    Sunday1: {},
    Monday2: {},
    Tuesday2: {},
    Wednesday2: {},
    Thursday2: {},
    Friday2: {},
    Saturday2: {},
    Sunday2: {}
  });
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {

    fetch(url + '/read/favorites')
      .then(results => results.json())
      .then(data => {

        setFavorites(data);

      })
      .catch(error => {
        console.log('this error', error)
      })

  }, [url])

  const addMeal = (key, value) => {
    var tempObj = {};
    //console.log('results',key,value)
    favorites.forEach((favorite) => {
      if (favorite.name === value) {
        tempObj = { ...favorite }
        //console.log('ingredients', favorite.ingredients.split(','))
        favorite.ingredients.split(',').forEach((ingredient) => {
          if (ingredient !== '') {

            ingredients[ingredient] = true;
          }
        })
      }
    })
    setMeals({
      ...meals,
      [key]: tempObj
    });
    setIngredientsList([...Object.keys(ingredients)])
  }
  
  return (
    <div className='entireSchedule'>
      <div className='schedule'>
        <div className='container'>
          <Weekday day="Monday1" favorites={favorites} addMeal={addMeal} value={meals.Monday1.name} />
          <Weekday day="Tuesday1" favorites={favorites} addMeal={addMeal} value={meals.Tuesday1.name} />
          <Weekday day="Wednesday1" favorites={favorites} addMeal={addMeal} value={meals.Wednesday1.name} />
          <Weekday day="Thursday1" favorites={favorites} addMeal={addMeal} value={meals.Thursday1.name} />
          <Weekday day="Friday1" favorites={favorites} addMeal={addMeal} value={meals.Friday1.name} />
          <Weekday day="Saturday1" favorites={favorites} addMeal={addMeal} value={meals.Saturday1.name} />
          <Weekday day="Sunday1" favorites={favorites} addMeal={addMeal} value={meals.Sunday1.name} />
        </div>
        <div className='container'>
          <Weekday day="Monday2" favorites={favorites} addMeal={addMeal} value={meals.Monday2.name} />
          <Weekday day="Tuesday2" favorites={favorites} addMeal={addMeal} value={meals.Tuesday2.name} />
          <Weekday day="Wednesday2" favorites={favorites} addMeal={addMeal} value={meals.Wednesday2.name} />
          <Weekday day="Thursday2" favorites={favorites} addMeal={addMeal} value={meals.Thursday2.name} />
          <Weekday day="Friday2" favorites={favorites} addMeal={addMeal} value={meals.Friday2.name} />
          <Weekday day="Saturday2" favorites={favorites} addMeal={addMeal} value={meals.Saturday2.name} />
          <Weekday day="Sunday2" favorites={favorites} addMeal={addMeal} value={meals.Sunday2.name} />
        </div>
      </div>
      <button onClick={() => {
        for (const meal in meals) { temp[meal] = favorites[Math.floor(Math.random() * favorites.length)] }
        setMeals(temp)
      }}>Randomize</button>

<div className='bookmark'>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <ol id='ingredientList'>
            {ingredientsList.map((ingredient) => {
                return <li key={ingredient + 'Key'}>{ingredient}</li>
              })}

          </ol>
        </div>
      </div>
    </div>
  )
}

export default Schedule
