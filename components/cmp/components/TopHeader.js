import React from "react";


const Header = () => {
  return (
    <div className="bg-white sticky top-0 h-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative py-6">

        {/* Left Section (Logo) */}
        <div>
          <img src="./Logo.svg" alt="Better Mortgage" />
        </div>

        {/* Center Divider with Profile Image */}
        <div className="absolute left-0 right-0 flex justify-center top-[70px]">
          <div className="w-full border-t-4 rounded-sm border-gray-300 mt-4"></div>
        </div>

        {/* Profile Image on the Divider */}
        <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2">
          <img
            src="./profile.jpeg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Right Section (Contact) */}
        <div className="relative z-10 flex items-center text-black font-bold">
          <span className="text-xl mr-2">📞</span>
          <span className="text-sm">Need help? Call (415) 523 8837</span>
        </div>

      </div>
    </div>

  )
}
export default Header;
