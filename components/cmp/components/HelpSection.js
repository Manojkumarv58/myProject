// import React from "react";
// import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
// import { MdOutlineRealEstateAgent } from "react-icons/md";

// const HelpSection = () => {
//   const options = [
//     { text: "Buying a home", icon: <FaHome size={28} className="text-green-700" /> },
//     { text: "Refinance my mortgage", icon: <MdOutlineRealEstateAgent size={28} className="text-green-700" /> },
//     { text: "Get cash from my home", icon: <FaHandHoldingUsd size={28} className="text-green-700" /> },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center mt-20 bg-[#FAFAF8] px-6 w-full">
//       {/* Heading */}
//       <h2 className="text-5xl font-medium text-gray-900 text-center">
//         Hi, I'm Betsy! <br />
//         <span className="text-gray-800">What can I help you with?</span>
//       </h2>

//       {/* Options */}
//       <div className="mt-6 w-full max-w-2xl space-y-4">
//         {options.map((option, index) => (
//           <button
//             key={index}
//             className="w-full flex items-center gap-4 border-4 border-gray-300 rounded-lg py-4 px-8 text-lg font-medium text-gray-800 hover:border-green-800 transition"
//           >
//             {option.icon}
//             {option.text}
//           </button>
//         ))}
//       </div>
//     </div>


//   );
// };

// export default HelpSection;
import React from "react";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const HelpSection = () => {
  const options = [
    { text: "Buying a home", icon: <FaHome size={28} className="text-green-700" />, link: "/buying-a-home" },
    { text: "Refinance my mortgage", icon: <MdOutlineRealEstateAgent size={28} className="text-green-700" />, link: "/refinance" },
    { text: "Get cash from my home", icon: <FaHandHoldingUsd size={28} className="text-green-700" />, link: "/cash-out" },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20 bg-[#FAFAF8] px-6 w-full">
      {/* Heading */}
      <h2 className="text-5xl font-medium text-gray-900 text-center">
        Hi, I'm Betsy! <br />
        <span className="text-gray-800">What can I help you with?</span>
      </h2>

      {/* Options */}
      <div className="mt-6 w-full max-w-2xl space-y-4">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.link}
            className="w-full flex items-center gap-4 border-4 border-gray-300 rounded-lg py-4 px-8 text-lg font-medium text-gray-800 hover:border-green-800 transition"
          >
            {option.icon}
            {option.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
