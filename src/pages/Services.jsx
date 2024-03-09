import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';

const Services = () => {
  const { services } = useGlobalContext();
  // console.log(services);
  return (
    <section>
      <h1 className='text-center mt-5 mb-4'>Our Services</h1>

      <div className="container">
        <div className="row equal-height-row">          
            {services && services.slice(0,9).map((currElem) =>
            {
              const { id, fullName, isUser, col1 } = currElem;

              return (
                <div className="col-12 col-md-4 mb-4" key={id}>
                  <div className="card">
                    <img src={col1} className="card-img-top" alt={isUser} />
                    <div className="card-body">
                      <h5 className="card-title">{fullName}</h5>
                      <p className="card-text">{isUser}</p>
                      <NavLink to="/service"><button  className="btn btn-success">Read More</button></NavLink>
                    </div>
                  </div>
                </div>
              )
            })}
          
        </div>
      </div>
    </section>
  )
}

export default Services;
