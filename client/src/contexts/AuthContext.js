import {createContext} from "react";
const AuthContext = createContext( defaultValue:{
    user: null,
        setUser: () => {},
        handleLogout: () => {}

});

export default AuthContext;