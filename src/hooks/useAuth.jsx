import React, { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../api/services/auth';


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!window.localStorage.getItem('token'));
  const [profile,setProfile]=useState({})

  useEffect(() => {
        const token = window.localStorage.getItem('token')
    if (token) {
        setIsAuthenticated(true)
        const fetchProfile = async()=>{
          try {
            const response = await getProfile();
            setProfile(response.data)
            
          } catch (error) {
            console.log(error)
          }
        }
        fetchProfile()
    }else{
        setIsAuthenticated(false)
    }
  }, [isAuthenticated])
  
 



  return (
    <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated,profile}}>
      {children}
    </AuthContext.Provider>
  );
};