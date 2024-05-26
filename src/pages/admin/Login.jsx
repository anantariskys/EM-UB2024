import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/services/auth";
import image from "../../assets/rektorat.png";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const {setIsAuthenticated} = useAuth()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    try {
      await login(credentials)
      setIsAuthenticated(true)
      navigate('/adminnnn')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative ">
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img src={image} className="w-full h-full scale-125 relative z-0" alt="" />
        <div className="w-full h-full bg-primary-charcoalGray absolute top-0 left-0 bg-opacity-50 z-10"></div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="w-full max-w-sm bg-primary-white rounded-md p-4 flex flex-col gap-2 relative z-10">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <input
            type="text"
            name="username"
            className="w-full px-2 py-2 outline-none border rounded-md"
            placeholder="Username"
            value={credentials.username}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="password"
            className="w-full px-2 py-2 outline-none border rounded-md"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
          />
          <button onClick={()=>onSubmit()} type="button" className="bg-primary-tealBlue rounded-md py-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;