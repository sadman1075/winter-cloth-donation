import React, { Children, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <Loader></Loader>
    }

    if(user)
    {
        return children
    }
    return <Navigate to={"/login"}></Navigate>
 
};

export default PrivateRoutes;