import React, { useEffect } from 'react';
import { useState } from 'react';
import './Favorites.css';
import notFound from './inside-book/404.png'
import Tooltip from 'react-tooltip'

const Favorites = () => {

  let url = "http://localhost:5555";

  const [favorites, setFavorites] = useState([{
    name: 'Nothing favorited',
    instructions: 'No instructions',
    thumbnail_url: 'No Thumbnail',
    video_url: 'No video',
    ingredients: 'No ingredients'
  }]);
  const [remove, setRemove] = useState(true)

  useEffect(() => {

    fetch(url + '/read/favorites')
      .then(results => results.json())
      .then(data => {

        setFavorites(data);

      })
      .catch(error => {
        console.log('this error', error)
      })

  }, [remove, url])

  function deleteFaverite(id) {

    let yes;
    yes = window.confirm('Are you sure you would like to delete the selected favorite?');

    if (yes) {
      
      fetch(url + '/delete/favorites/' + id)
        .then(data => {
          //console.log(data)
          setRemove(!remove)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <div className='favDiv'>
      <h3>Click to delete</h3>
      {favorites.map(favorite => {
        return <div className='favorite' key={favorite.id}>
          <Tooltip key={favorites.id + 'tooltip'}/>
            <img 
              src={favorite.thumbnail_url} 
              alt={notFound} 
              data-tip={favorite.name} 
              className='favoritePic' 
              key={favorite.id + 'Pic'} 
              onClick={() => { deleteFaverite(favorite.id) }} 
            />

        </div>
      })}
    </div>
  )

}

export default Favorites
