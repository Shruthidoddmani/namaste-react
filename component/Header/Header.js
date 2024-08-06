import React from 'react'

export default function Header() {
  return (
    <div className ="header">
        <div className="logo-container">
            <img classname="logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimilarpng.com%2Fgood-food-logo-design-on-transparent-background-png%2F&psig=AOvVaw1BOgZ09OpbiRI-OB9Cu_cb&ust=1722003427534000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJji8eSwwocDFQAAAAAdAAAAABAE"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}
