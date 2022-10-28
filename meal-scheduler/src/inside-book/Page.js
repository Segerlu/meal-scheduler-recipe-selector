import React from 'react'
import { useState } from 'react'
import './Page.css'

const Page = ({ results }) => {

  let [selectedRecipe, setSelectedRecipe] = useState({
    name: "No recipe selected",
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
export default Page
