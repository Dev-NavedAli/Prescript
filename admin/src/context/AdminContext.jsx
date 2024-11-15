import { createContext } from "react"

export const AdminContext = createContext()


const AdminContextProvider = (props) => {
    const value = {

    }

    return <AdminContext.Provider>
        {props.children}
    </AdminContext.Provider>

}

export default AdminContextProvider