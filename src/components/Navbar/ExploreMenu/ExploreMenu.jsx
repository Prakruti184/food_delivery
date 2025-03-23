import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../../assets/assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Explore a vast menu filled with delicious options from your favorite local restaurants. Whether you're craving comfort food or something new, we’ve got you covered. Browse through categories, check out special offers, and find exactly what you're in the mood for. <b>ORDERING YOUR NEXT MEAL IS JUST A FEW TAPS AWAY!</b></p>

        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" /> 
                        <p>{item.menu_name}</p>        
                                   </div>
                )

            } )}
        </div>
        <hr />


    </div>
  )
}

export default ExploreMenu