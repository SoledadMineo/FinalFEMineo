import React, { useContext } from 'react'
import { NewContext } from '../components/utils/Context'
import { Link } from 'react-router-dom';
import FavoriteButton from '../components/favorite-button/Favorite-button';

const Favorites = () => {
  const { state } = useContext(NewContext);
  return (
    <div>
      <h1><center>Favoritos</center></h1>

    <div className='container'>
        
      {
        state.data.map((item) => (
        
          <div key={item.id}>
            <img src="../../imagen/dentista.png " alt="Profesional"  width="150" height="150" />
            <h2>{item.name }</h2>
            <h2>{item.username}</h2>
            <Link to={`/users/${item.name}`}>Ver mas:</Link>
            <FavoriteButton item={item} />
          </div>
          
        ))}
    </div>
    </div>
  )
}

export default Favorites;