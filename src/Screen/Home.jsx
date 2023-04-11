import React from 'react'
import '../style/Style.css';
import { Link } from 'react-router-dom';
import { useGetData } from '../hooks/UseGetData';
import FavoriteButton from '../components/favorite-button/Favorite-button';

export const endpoint = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const { values } = useGetData(endpoint);
  return (
    <div className='container'>
      {
        values?.map((item) => (
          <div key={item.id}>
            <img src="../../imagen/dentista.png" alt="Profesional" width="150" height="150" /><br />
            <h2>{item.name}</h2>
            <h2>{item.username}</h2>
            <Link to={`/users/${item.name}`}>Ver mas</Link>
            <FavoriteButton item={item} />
          </div>
        ))}
    </div>
  )
}

export default Home