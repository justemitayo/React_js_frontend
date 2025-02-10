import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assests/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
        <div className='explore-menu-list'>
            {menu_list.map((food,index) =>{
              return(
                <div onClick={() => setCategory((prev)=>prev===food.menu_name?'all' : food.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className ={category === food.menu_name ? 'Active' : ''} src={food.menu_image} alt=''/>
                    <p>{food.menu_name}</p>
                </div>
              )             })}
        </div>
        <hr></hr>
    </div>
  )
}

export default ExploreMenu