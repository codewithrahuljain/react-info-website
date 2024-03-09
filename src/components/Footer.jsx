import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
    <div className="container-fluid bg-success p-2 text-dark bg-opacity-10 py-5 mt-5 fotinfo-react">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12">
                    <p className="fotinfo-head">Info Website</p>
                    <ul className="list-group">
                        <li className="list-group-item"><NavLink to="/about">About</NavLink></li>
                        <li className="list-group-item"><NavLink to="/service">Services</NavLink></li>
                        <li className="list-group-item"><NavLink to="/contact">Contact us</NavLink></li>
                    </ul>
                </div>                

                <div className="col-md-4 col-12 fotcol4">
                    <p className="fotinfo-head mt-4 mt-sm-0">Connect us</p>
                    <p>82 Horne St, Campbellfield VIC 3061</p>
                    <p><a className='link-underline link-underline-opacity-0 link-dark' href="tel:8595114066" target="_top">8595114066</a></p>
                    <p><a className='link-underline link-underline-opacity-0 link-dark' href="mailto:rahuljain1516@gmail.com" target="_top">rahuljain1516@gmail.com</a></p>
                    <ul className="list-inline fotifo-socicon">
                        <li className="list-inline-item"><a href="linkedin.com/in/rahuljain1516" target="_blank"><FaLinkedinIn /></a></li>
                        <li className="list-inline-item"><a href="https://github.com/codewithrahuljain/" target="_blank"><FaGithub /></a></li>
                    </ul>
                </div>

                <div className="col-md-4 col-12 fotcol4">
                    <p className="fotbotline text-right mb-0">© Copyright 2024 Info Website. Created by Rahul Jain.</p>
                </div>

            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
