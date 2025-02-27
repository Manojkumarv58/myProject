import { FaRegClock } from "react-icons/fa6"; // Clock Icon
import { FaStar } from "react-icons/fa"; // Star Icon
import { FcGoogle } from "react-icons/fc"; // Google Logo

function Hero() {
  return (
    <div id="hero-section" className="relative bg-[#044f36] min-h-screen flex flex-col justify-center items-center text-center text-white px-4 md:px-8">
      
      {/* Text Section */}
      <div className="absolute top-[10%] md:top-[15%] z-[100] text-[#1EE07F] text-center">
        <h1 className="text-[48px] md:text-[80px] lg:text-[120px] font-semibold leading-none">Mortgages</h1>
        <h1 className="text-[48px] md:text-[80px] lg:text-[120px] font-semibold leading-none">made simple</h1>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 w-full flex justify-center">
        <img src="./hero-variant-c.webp" alt="Hero" className="h-[300px] md:h-[500px] lg:h-[600px] w-auto" />
      </div>

      {/* Left Content - Start Approval Button & Time Info */}
      <div className="absolute left-5 md:left-[100px] lg:left-[200px] top-[70%] md:top-[64%] transform -translate-y-1/2 text-left">
        <button className="bg-[#1EE07F] text-black text-[16px] md:text-[18px] px-5 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 hover:bg-transparent hover:text-white">
          <a href="/starter">Start my approval</a>
        </button>
        <div className="flex items-center gap-2 mt-2 text-sm md:text-lg text-gray-300">
          <FaRegClock />
          <span>3 min | No credit impact</span>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="absolute right-5 md:right-20 top-[75%] md:top-[64%] transform -translate-y-1/2 flex items-center gap-2 p-2 rounded-lg shadow-md bg-[#044f36] text-white">
        <FcGoogle className="text-xl md:text-2xl" />
        <div>
          <div className="flex text-yellow-500 text-sm md:text-base">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-400" />
          </div>
          <p className="text-xs md:text-sm">4.6 Stars | 3177 Google reviews</p>
        </div>
      </div>

      {/* Better Forever Section */}
      <div className="fixed bottom-3 md:bottom-5 right-3 md:right-5 bg-white text-black p-2 md:p-3 rounded-lg shadow-lg w-[200px] md:w-[250px] flex items-center border border-gray-200">
        <div className="relative w-1/3 h-14 md:h-16">
          <img src="./floating-image.webp" alt="Better Forever" className="w-full h-full rounded-md object-cover" />
          <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xs text-center">Better Forever</h4>
        </div>
        <div className="w-2/3 pl-2">
          <p className="text-xs md:text-sm text-gray-600 leading-tight">Save on future home loans with $0 origination fees.</p>
          <a href="#" className="text-green-600 text-xs md:text-sm font-semibold mt-1 inline-block">See details →</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
