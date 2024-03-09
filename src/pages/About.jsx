import React, { useEffect } from 'react'
import Herosection from '../components/Herosection';
import { useGlobalContext } from '../context';

const About = () => {
  // const data = {
  //   title: "Empowering Your Digital Success",
  //   subtext: "Transforming Ideas into Exceptional Digital Experiences"
  // }

  const { updateAboutPage } = useGlobalContext();

  useEffect(() =>{
    updateAboutPage();
  }, []);

  return (
    <Herosection />
  )
}

export default About
