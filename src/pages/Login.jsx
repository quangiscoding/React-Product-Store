import { useState } from "react";
import { useNavigate } from "react-router-dom";

import users from "../mock/users.js";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password,
    );

    if (!foundUser) {
      setError("Invalid credentials");
      return;
    }
    login(foundUser);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 flex flex-col gap-4 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold">Login</h1>
        {/* Username */}
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="username">
            Username <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            name="username"
            required
            placeholder="John Doe"
            className="input"
            value={formData.username}
            onChange={(e) =>
              setFormData({
                ...formData,
                username: e.target.value,
              })
            }
          />
        </div>
        {/* Password */}
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="username">
            Password <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password@12345"
            className="input"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
        </div>
        {/* Error */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="btn btn-primary text-center flex-1">Login</button>
          <button
            type="button"
            className="btn btn-secondary text-center flex-1"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
