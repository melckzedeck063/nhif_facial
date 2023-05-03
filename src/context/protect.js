
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext, AuthProvider } from '.'
import AuthUser from './userAuth';

function ProtectedRoute({children}) {

    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const { token } = AuthUser();

    if (!token) {
        setTimeout(() => {
            // window.location.reload(false);
            context.handleLogout();
            navigate('/')
        }, 100);
    }

  return (
      <AuthProvider>
          {children}
    </AuthProvider>
  )
}

export default ProtectedRoute

