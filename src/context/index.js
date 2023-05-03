import React, { useCallback, useState, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router';

const AuthContext = React.createContext(null);

const AuthProvider = (props) => {

    const [authenticatedUser, setAuthenticatedUser] = useState();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = useCallback(() => {
        const storage = sessionStorage.getItem('token');
        if (storage) {
            const { token } = JSON.parse(storage)
            setAuthenticatedUser(token)
            const origin = location.state?.from?.pathname || './dashboard';
            navigate(origin)
        }
    }, [navigate, location])

    const handleLogout = useCallback(() => {
        setAuthenticatedUser(null);
        sessionStorage.removeItem('token');
        setTimeout(() => {
            navigate('/')
        }, 1000);
    }, [navigate]);


    
    const values =  useMemo(() =>({
        authenticatedUser,
        handleLogin,
        handleLogout,
    }),[authenticatedUser,handleLogin,handleLogout])
  return (
      <AuthContext.Provider value={values} >
          {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}