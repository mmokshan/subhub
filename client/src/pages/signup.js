import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [addusererror, setAddUserError] = useState(""); // Corrected variable name

  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    // Reset previous error messages
    setAddUserError(""); // Corrected variable name
   
    try {
        await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
      alert("Registration Completed! Now Login.");
      setUsername("");
      setPassword("");
      navigate("/auth/login");

    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        // Display the error message from the backend
        setAddUserError(err.response.data.error);
        
      } else {
        console.error(err);
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Register</h2>
        </div>
        <form onSubmit={onSubmit} className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              id="username"
              type="text"
              placeholder="Enter your User Name"
              // required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
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
            {addusererror && (
              <div className="text-red-600">{addusererror}</div>
            )}
          </div>

          <div className="mb-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center text-sm">
          <p className="text-gray-600">
            Already have an account?
            <a className="text-blue-500 hover:underline" href="/auth/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
