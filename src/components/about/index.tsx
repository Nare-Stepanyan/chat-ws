import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const About: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>About</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default About;
