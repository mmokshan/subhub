import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);  // eslint-disable-line no-unused-vars

  // Rest of your component code



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError("");

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });


      setCookies("access_token", response.data.token);

      window.localStorage.setItem("userID", response.data.userID);
      console.log("userID:", response.data.userID);
      if (response.data.message) {
        alert(response.data.message); 
        navigate("/");     
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        // Display the error message from the backend
        setLoginError(err.response.data.error);
      } else {
        console.error(err);
      }
    }
   
    
   
    

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Enter your username"
              // required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              // required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {loginerror && (
              <div className="text-red-600">{loginerror}</div>
            )}
          </div>

          <div className="mb-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?
            <a className="text-blue-500 hover:underline" href="/auth/register">Register</a>
          </p>
          <p className="mt-2 text-gray-600">
            Forgot your password?
            <a className="text-blue-500 hover:underline" href="/auth/reset-password">Reset password</a>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login
