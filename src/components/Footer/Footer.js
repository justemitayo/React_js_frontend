import React from 'react';
import './Footer.css';
import { assets } from '../../assests/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt= ''/>
          <p>
            Do tempor Lorem laborum do anim aliquip adipisicing velit. Est commodo deserunt quis mollit cillum laborum voluptate quis qui aute aute dolore mollit id. Eu laboris cupidatat consequat eu duis veniam sunt. Ex commodo consectetur aute nostrud dolor labore. Nulla ullamco nulla ex dolor pariatur exercitation laboris sit anim. Reprehenderit in do et nulla incididunt quis.
          </p>
          <div className='footer-social-icon'>
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.twitter_icon} alt=''/>
            <img src={assets.linkedin_icon} alt=''/>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+234-813-344-3450</li>
            <li>contact@tomao.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>copyright 2024 @ Tomato.com- All Right Reserved.</p>
    </div>
  )
}

export default Footer