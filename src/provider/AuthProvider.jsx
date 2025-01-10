import { getAuth } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";

const auth = getAuth(app);
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const authInfo = {
        user, loading
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.object,
}

export default AuthProvider;
