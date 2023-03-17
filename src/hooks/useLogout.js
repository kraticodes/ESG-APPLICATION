import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import {useAuthContext} from '../hooks/useAuthContext';

export const useLogout  = () => {
    
     const {dispatch} = useAuthContext();



    const logout = () => {
        //remove user from localstorage
        localStorage.removeItem('user');
        
        
        dispatch({type:'LOGOUT'});
       
        
    }

    return {logout};
}