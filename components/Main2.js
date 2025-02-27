import { FaArrowRight } from "react-icons/fa";

function Main2() {
    return (
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 bg-[#FAF9F7]">
        {/* Container for Heading and Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Heading - "Got questions?" & "We've got answers" */}
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#292B29] leading-tight">
              Got questions? <br /> We've got answers
            </h2>
          </div>
  
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="border-2 border-green-900 text-green-900 px-6 py-2 rounded-full font-semibold text-lg">
              Our products
            </button>
            <button className="border-2 border-gray-400 text-gray-600 px-6 py-2 rounded-full font-semibold text-lg hover:border-green-900 hover:text-green-900">
              Calculators
            </button>
            <button className="border-2 border-gray-400 text-gray-600 px-6 py-2 rounded-full font-semibold text-lg hover:border-green-900 hover:text-green-900">
              Guides & FAQs
            </button>
          </div>
        </div>
  
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {/* First Card */}
          <div className="bg-[#E9F3EC] rounded-lg p-6 md:p-8 flex flex-col justify-between">
            <h3 className="text-xl md:text-2xl font-semibold text-[#292B29]">
              Buying your first home with Better
            </h3>
            <div className="w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full hover:bg-[#006D3D] hover:text-white">
              <FaArrowRight />
            </div>
            <img src="./first-home.webp" alt="First Home" className="w-full rounded-lg" />
          </div>
  
          {/* Second Card */}
          <div className="bg-[#E9F3EC] rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-[#292B29]">
                One Day Mortgage <sup>1</sup>
              </h3>
              <p className="text-gray-700 text-base md:text-lg mt-2">
                Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.
              </p>
              <div className="w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full hover:bg-[#006D3D] hover:text-white">
                <FaArrowRight />
              </div>
            </div>
            <img src="./one-day-mortgage.webp" alt="One Day Mortgage" className="w-1/2 md:w-[40%] rounded-lg self-center" />
          </div>
        </div>
  
        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          {/* Better HELOC Card */}
          <div className="bg-[#EFF8F1] rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between">
            <img src="./better-heloc.webp" alt="Better HELOC" className="w-1/2 rounded-lg" />
            <div className="md:w-1/2 flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-[#292B29]">
                Better HELOC
              </h3>
              <p className="text-gray-700 text-base md:text-lg mt-2">
                Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit.
              </p>
              <div className="w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full hover:bg-[#006D3D] hover:text-white">
                <FaArrowRight />
              </div>
            </div>
          </div>
  
          {/* Insurance Card */}
          <div className="bg-[#EFF8F1] rounded-lg p-6 md:p-8 flex flex-col justify-between">
            <h3 className="text-xl md:text-2xl font-semibold text-[#292B29]">
              Insurance
            </h3>
            <div className="flex justify-between items-end">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full hover:bg-[#006D3D] hover:text-white">
                <FaArrowRight />
              </div>
              <img src="./insurance.webp" alt="Insurance" className="w-20 md:w-24 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    );
}
  
export default Main2;
