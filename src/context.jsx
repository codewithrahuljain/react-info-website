// create a context = warehouse me data h;
// provider = warehouse se data get kra h;
// consumer = wareshouse se aya hua data useActionData;

import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const API = "https://retoolapi.dev/TAZFmK/services";

const initialState = {
    title: "",
    subtext: "",
    services: [],
};



const AppProvider = ({ children }) =>
{
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const updateHomePage = () =>
    {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                title: "Welcome to [Code with Rahul]",
                subtext: "We are a team of passionate developers and designers dedicated to bringing your vision to life. From concept to launch, we partner with you to create stunning websites, robust web applications, and memorable user experiences."
            }
        });
    };

    const updateAboutPage = () =>
    {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                title: "Empowering Your Digital Success",
                subtext: "Transforming Ideas into Exceptional Digital Experiences"
            }
        });
    };

    // to get the api data
    const getServices = async (url) =>
    {
        try
        {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: "GET_SERVICES", payload: data });
        } catch (error)
        {
            console.log(error);
        }
    };

    // to call the api
    useEffect(() =>{
        getServices(API);
    }, []);
    
    return <AppContext.Provider value={{... state, updateHomePage, updateAboutPage}}>{ children }</AppContext.Provider>;
};

// global custom hook

const useGlobalContext = () =>
{
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };