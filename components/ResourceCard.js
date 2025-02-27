import React from "react";

const ResourceCard = ({ icon, title, description, linkText, linkUrl }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-center text-black">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={linkUrl} className="text-blue-600 font-semibold mt-2 inline-block">
        {linkText} →
      </a>
    </div>
  );
};
export default ResourceCard;