import React from 'react'
import { useState } from 'react'
import './Page.css'

//pull info from local storage
let favorites = {favorites:[]};
try{
  if (localStorage.getItem(favorites))
  favorites = localStorage.getItem(favorites);
} catch {
  console.log('failed to load favorites')
}

const Page = ({ results }) => {

  let [selectedRecipe, setSelectedRecipe] = useState({
    name: "No recipe selected",
    id:-1,
    instructions: [],
    num_servings: 0,
    thumbnail_url: './404.png',
    video_url: 'no Video'
  });

  console.log('Page updated')
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
              key={result.id}
              onClick={() => {
                setSelectedRecipe({
                  name: result.name,
                  instructions: result.instructions,
                  num_servings: result.num_servings,
                  thumbnail_url: result.thumbnail_url,
                  video_url: result.video_url
                })
              }}
            >
              {result.name}
            </div>)
          })}

      </div>

      <div className='container'>
        <div className='details'>
          <h2>{selectedRecipe.name}</h2>
          <button onClick={() => saveFavorites(selectedRecipe.id)}>Favorite</button>
          <img src={selectedRecipe.thumbnail_url} alt='./404.png' />
          <h3>serves: {selectedRecipe.num_servings}</h3>
          <ol>
            {selectedRecipe.instructions.map(instruction => {
              return <li key={instruction.id}>{instruction.display_text}</li>
            })}
          </ol>
        </div>

      </div>
    </>
  )
}

function saveFavorites(id) {
  console.log('favorite function', favorites)
  if (favorites.favorites.includes(id) || id < 0) {

  } else {
    console.log(favorites)
    favorites.favorites.push(id);
    console.log(favorites)
    localStorage.setItem(favorites, favorites.favorites);
  }
}

export default Page
