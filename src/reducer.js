const reducer = (state, action) =>
{
    if (action.type === "HOME_UPDATE")
    {
        return {
            ...state,
            title: action.payload.title,
            subtext: action.payload.subtext
        };
    };

    if (action.type === "ABOUT_UPDATE")
    {
        return {
            title: action.payload.title,
            subtext: action.payload.subtext
        };
    }

    if (action.type === "GET_SERVICES")
    {
        return {
            ...state,
            services: action.payload,
        };
    }

    return state;
};

export default reducer;