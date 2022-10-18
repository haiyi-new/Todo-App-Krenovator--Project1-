import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
  
  <div className="px-5 py-4 my-5 text-center">
        <h1 className="display-5 fw-bold">Welcome <strong>{user && user.name}</strong>!!</h1>

  </div>

  
  );
};

export default Welcome;