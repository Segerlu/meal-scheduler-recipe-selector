import React from 'react'
import { useState, useEffect } from 'react'
import './Page.css'
import notFound from './404.png'
import ReactPlayer from 'react-player/lazy'

const url = 'http://localhost:5555';

//pull info from local storage
let favorites = [];

const Page = ({ results }) => {
  useEffect(() => {

    fetch(url + '/read/favorites')
      .then(results => results.json())
      .then(data => {

        favorites.push(data.id);

      })
      .catch(error => {
        console.log('this error', error)
      })

  }, [])

  function saveFavorites(id) {
    //console.log('favorite function', favorites)
    //console.log(selectedRecipe)
    if (favorites.includes(id) || id < 0) {

    } else {
      favorites.push(id);
      //console.log('is pushed',favorites)
      //call the post
      fetch(url + '/add/favorites', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedRecipe)
      })
        .then(results => {
          //console.log('results', results)
        })
    }
  }


  let [selectedRecipe, setSelectedRecipe] = useState({
    name: "No recipe selected",
    id: -1,
    instructions: [],
    num_servings: 0,
    thumbnail_url: notFound,
    video_url: 'no Video',
    ingredients: ['No Ingredients']
  });

  //console.log('Page updated')
  if (!results) {
    return (
      <div className='container'>
        <div className='results'>
          Nothing to display
        </div>
      </div>
    )
  }
  return (
    <>
      <div className='container'>
        {
          results.map(result => {
            return (<div
              className='results'
              key={result.idMeal}
              onClick={() => {
                setSelectedRecipe({
                  id: result.idMeal,
                  name: result.strMeal,
                  instructions: result.strInstructions ? result.strInstructions : 'No instructions available',
                  thumbnail_url: result.strMealThumb ? result.strMealThumb : './404.png',
                  video_url: result.strYoutube ? result.strYoutube : 'https://youtu.be/BUykFA7FCo4',
                  ingredients: result.strIngredient1 ? [result.strIngredient1, result.strIngredient2, result.strIngredient3, result.strIngredient4, result.strIngredient5, result.strIngredient6, result.strIngredient7, result.strIngredient8, result.strIngredient9, result.strIngredient10, result.strIngredient11, result.strIngredient12, result.strIngredient13, result.strIngredient14, result.strIngredient15, result.strIngredient16, result.strIngredient17, result.strIngredient18, result.strIngredient19, result.strIngredient20] : ['No Ingredients', 'No Ingredients']
                })
              }}
            >
              {result.strMeal}
            </div>)
          })}

      </div>

      <div className='bookmark'>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <ol id='ingredientList'>
            {

              selectedRecipe.ingredients.map((ingredient) => {
                return ingredient ? <li key={ingredient + 'Key'}>{ingredient}</li> : <></>
              })
            }

          </ol>
        </div>
      </div>

      <div className='container'>
        <div className='details'>
          <h2>{selectedRecipe.name}</h2>
          <button onClick={() => {

            //console.log(selectedRecipe.id)
            saveFavorites(selectedRecipe.id)

          }}>Favorite</button>
          <div id='media'> <img src={selectedRecipe.thumbnail_url} alt={notFound} />
            <ReactPlayer
              url={selectedRecipe.video_url}
              controls={true}
              width='11vw'
              height='6vw'
              volume={0}
              muted={true}
              playing={true}
            />
          </div>

          <p>{selectedRecipe.instructions}</p>

        </div>

      </div>
    </>
  )
}



export default Page
