import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to student portal</h2>
      <p className="text-gray-700 mb-6">
        This is a simple React Router project
      </p>
      <button
        onClick={() => navigate("/about")}
        className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Go to about
      </button>
    </div>
  );
};

export default Home;
