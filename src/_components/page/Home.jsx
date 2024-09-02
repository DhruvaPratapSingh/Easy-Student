import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Card title="Internship" path="/internship" />
        <Card title="Contest" path="/contest" />
        <Card title="Prepguide" path="/preparation" />
        <Card title="Ask Something" path="/faq" />
      </div>
      <div className="text-center">
        <button onClick={()=>{
          alert("Right now only this much content is present, will upload slowly ")
        }} className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300">
          Show More
        </button>
      </div>
    </div>
  );
};

const Card = ({ title, path }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md w-64 text-center bg-green-100">
      <Link to={path} className="text-blue-500 text-xl font-semibold hover:underline">
        {title}
      </Link>
    </div>
  );
};

export default Home;
