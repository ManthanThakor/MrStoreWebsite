import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [state, setState] = useState(null);

    const value = {
        state,
        setState,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AppContext;