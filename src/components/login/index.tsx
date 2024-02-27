import React, { useState } from "react";
import LoginForm from "../login-form";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../app/hook";
import { setUser } from "../../store/user/userSlice";

const mockUsers = [
  { id: 1, userName: "Sarah", password: "password1" },
  { id: 2, userName: "Alice", password: "password2" },
  { id: 3, userName: "Mike", password: "password3" },
];

const LoginPage: React.FC = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (userName: string, password: string) => {
    const user = mockUsers.find(
      (user) => user.userName === userName && user.password === password
    );
    if (user) {
      dispatch(setUser(user));
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <h1 className="title">Welcome to Login Page</h1>
      <LoginForm onSubmit={handleSubmit} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
