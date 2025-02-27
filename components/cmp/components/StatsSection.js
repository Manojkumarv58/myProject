import React from "react";
import { FaPercentage, FaDollarSign, FaMobileAlt } from "react-icons/fa";

const StatsSection = () => {
  const features = [
    { text: "Custom mortgage rates", icon: <FaPercentage size={20} className="text-green-700" /> },
    { text: "Exclusive offers", icon: <FaDollarSign size={20} className="text-green-700" /> },
    { text: "A personalized dashboard", icon: <FaMobileAlt size={20} className="text-green-700" /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-[#FAFAF8] px-6 w-full">
      {/* Statistics */}
      <div className="flex flex-col md:flex-row gap-8 text-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">$100B</h2>
          <p className="text-gray-600">home loans funded entirely online</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900">400K</h2>
          <p className="text-gray-600">Customers who chose a Better Mortgage</p>
        </div>
      </div>

      {/* Feature Box */}
      <div className="mt-8 bg-green-50 p-6 rounded-lg max-w-2xl w-full text-center flex flex-col items-center">
        <p className="text-gray-700 font-medium mb-4">After a few questions, you'll unlock:</p>
        <ul className="space-y-3 text-gray-800">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 justify-start">
              <span className="flex items-center">{feature.icon}</span>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>


    </div>

  );
};

export default StatsSection;
