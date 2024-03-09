import React, { useContext, useEffect } from 'react'
import Herosection from '../components/Herosection';
import { AppContext, useGlobalContext } from '../context';
import Services from './Services';

const Home = () => {
    // const firstName = useContext(AppContext)
    // const data = {
    //     title: "Welcome to [Code with Rahul]",
    //     subtext: "We are a team of passionate developers and designers dedicated to bringing your vision to life. From concept to launch, we partner with you to create stunning websites, robust web applications, and memorable user experiences."
    // }

    const { updateHomePage } = useGlobalContext();

    useEffect(() =>{
        updateHomePage();
    }, []);

    return (
        <>
            <Herosection />
            <Services />
        </>
  )
}

export default Home
