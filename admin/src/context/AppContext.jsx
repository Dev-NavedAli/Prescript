import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {

    }
    return <AppContext.Provider>
        {props.childeren}
    </AppContext.Provider>
}

export default AppContextProvider