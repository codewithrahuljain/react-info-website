import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Herosection = (props) =>{
   
  const {title, subtext}  = useGlobalContext();

  return (
    <div className="container mt-4">
        <div className="row align-items-center">
              <div className="col-sm-6 col-12">
                  <h1>{title}</h1>
                  <p>{subtext}</p>
                  
                  <button className='btn btn-success'>
                      <NavLink to="/contact" className="text-white link-underline link-underline-opacity-0">Get Started</NavLink>
                  </button>
              </div>
              <div className="col-sm-6 col-12">
                  <img src="./images/herosection_homeimg.jpg" alt="herosection" className='img-fluid' />
              </div>
        </div>
    </div>
  )
}

export default Herosection
