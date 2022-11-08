import React, { useEffect, useState } from 'react'
import '../css/Restaurant.css'
import {Link} from 'react-router-dom'

const Restaurant = () => {
  let [restaurants, setRestaurant] = useState([]);
  let handleDelete = (id) => {
    setRestaurant(restaurants.filter(x => x.id !== id))
  }

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:1000/restaurants")
      let resData = await response.json();
      setRestaurant(resData)
    }
    fetchData()
  }, [])
  return (
    <div className='restaurant'>
      <div className='addRes'>
        <Link to="/add-restaurant" className='btn-add-res'>Add Restaurant</Link>
      </div>
      <div className="grid-container">
        {
          restaurants.map((restaurant) => {
            return <div key={restaurant.id} className='grid-item'>
              <h1>{restaurant.name}</h1>
              <h3>{restaurant.place}</h3>
              <h5>{restaurant.famous}</h5>
              <button className='btn-delete-res' onClick={() => { handleDelete(restaurant.id) }}>Delete</button>
            </div>
          })
        }
      </div>
     

    </div>
  )
}

export default Restaurant

