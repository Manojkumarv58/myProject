import { FaRegClock } from "react-icons/fa6"; // Clock Icon
import { FaStar } from "react-icons/fa"; // Star Icon
import { FcGoogle } from "react-icons/fc"; // Google Logo

function Hero() {
  return (
    <div id="hero-section" className="relative bg-[#044f36] h-[860px] flex justify-center items-center text-center text-white">
      
      {/* Text Section (Absolute Positioned on Image) */}
      <div className="absolute top-[15%] z-[100] text-[#1EE07F]">
        <h1 className="text-[120px] font-semibold leading-none">Mortgages</h1>
        <h1 className="text-[120px] font-semibold leading-none">made simple</h1>
      </div>

      {/* Image Section (Positioned at Bottom) */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <img src="./hero-variant-c.webp" alt="Hero" className="h-[600px] w-auto" />
      </div>

      {/* Left Content - Start Approval Button & Time Info */}
      <div className="absolute left-[200px] top-[64%] transform -translate-y-1/2 text-left">
        <button className="bg-[#1EE07F] text-black text-[18px] font-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white">
         <a href="/starter">Start my approval</a> 
        </button>
        <div className="flex items-center gap-2 mt-3 text-lg text-gray-300">
          <FaRegClock />
          <span>3 min | No credit impact</span>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="absolute right-20 top-[64%] transform -translate-y-1/2 flex items-center gap-2 p-2 rounded-lg shadow-md">
        <div className="flex items-center gap-1 text-white">
          <FcGoogle className="text-2xl" />
        </div>
        <div className="text-white">
          <div className="flex text-yellow-500">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-400" />
          </div>
          <p className="text-[12px]">4.6 Stars | 3177 Google reviews</p>
        </div>
      </div>

      {/* Better Forever Section - Fixed at Bottom Right */}
      <div className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-lg shadow-lg w-[250px] flex items-center border border-gray-200">
        
        {/* Image Section */}
        <div className="relative w-1/3 h-16">
          <img src="./floating-image.webp" alt="Better Forever" className="w-full h-full rounded-md object-cover" />
          
          {/* White Text on Image */}
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xs text-center">
            Better Forever
          </h4>
        </div>

        {/* Content Section */}
        <div className="w-2/3 pl-2">
          <p className="text-xs text-gray-600 leading-tight">Save on future home loans with $0 origination fees.</p>
          <a href="#" className="text-green-600 text-xs font-semibold mt-1 inline-block">See details →</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;