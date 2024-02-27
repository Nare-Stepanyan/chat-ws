import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home";
import NotFound from "../not-found";
import LoginPage from "../login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
