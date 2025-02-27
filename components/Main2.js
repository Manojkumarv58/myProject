import { FaArrowRight } from "react-icons/fa";


function Main2() {
    return (
      <section className="px-3 md:px-[50px] py-[80px] bg-[#FAF9F7]">
        {/* Container for Heading and Buttons */}
        <div className="flex flex-wrap items-center justify-between">
          {/* Heading - "Got questions?" & "We've got answers" */}
          <div className="max-w-2xl">
            <h2 className="text-[50px] md:text-[50px] font-semibold text-[#292B29] leading-[1.1]">
              Got questions? <br /> We've got answers
            </h2>
          </div>
  
         {/* Buttons */}
<div className="flex flex-wrap gap-4 md:mt-0">
  {/* First Button - No hover effect for border thickness */}
  <button className="relative border-[3px] border-green-900 text-green-900 px-6 py-2 rounded-full font-semibold text-lg box-border">
    Our products
  </button>

  {/* Second Button */}
  <button className="relative text-gray-600 px-6 py-2 rounded-full text-lg font-semibold box-border overflow-hidden 
    before:absolute before:inset-0 before:border-[3px] before:border-gray-400 before:rounded-full before:transition-all before:duration-300 
    hover:before:border-[4px] hover:before:border-green-900 hover:text-green-900">
    Calculators
  </button>

  {/* Third Button */}
  <button className="relative text-gray-600 px-6 py-2 rounded-full text-lg font-semibold box-border overflow-hidden 
    before:absolute before:inset-0 before:border-[3px] before:border-gray-400 before:rounded-full before:transition-all before:duration-300 
    hover:before:border-[4px] hover:before:border-green-900 hover:text-green-900">
    Guides & FAQs
  </button>
</div>
        </div>
        
        <div className="grid md:grid-cols-[380px_760px] gap-6 pt-[60px]">
      {/* First Card */}
      <div className="bg-[#E9F3EC] rounded-lg p-6 md:p-8 w-[380px] h-[340px]">
        <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292B29]">
          Buying your first home <br /> with Better
        </h3>

        {/* Arrow Button */}
        <div className="mt-4 w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full transition-all duration-300 hover:bg-[#006D3D] hover:text-white hover:border-[#006D3D] hover:border-[3px]">
          <FaArrowRight className="text-[#292B29] hover:text-white transition-colors duration-300" />
        </div>

        <div className="mt-6">
          <img
            src="./first-home.webp"
            alt="First Home"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Second Card (Double Width) */}
      <div className="bg-[#E9F3EC] rounded-lg p-6 md:p-8 w-[760px] h-[340px] flex">
        {/* Left Side - Text Content */}
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292B29]">
              One Day Mortgage <sup>1</sup>
            </h3>
            <p className="text-[#292B29] text-lg mt-2">
              Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.
            </p>
          </div>
          {/* Arrow Button */}
          <div className="mt-4 w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full transition-all duration-300 hover:bg-[#006D3D] hover:text-white hover:border-[#006D3D] hover:border-[3px]">
            <FaArrowRight className="text-[#292B29] hover:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="./one-day-mortgage.webp"
            alt="One Day Mortgage"
            className="w-[80%] md:w-[70%] rounded-lg"
          />
        </div>
      </div>
    </div>
      {/* second row cards */}

      <div className="grid grid-cols-[736px_368px] gap-6 pt-[30px] justify-center">
      {/* Better HELOC Card - 736px Width */}
      <div className="bg-[#EFF8F1] rounded-lg p-6 md:p-8 flex w-[736px] h-[260px]">
        {/* Right Image Section */}
        <div className="w-1/2 flex justify-start items-center">
          <img
            src="./better-heloc.webp"
            alt="Better HELOC"
            className="w-[90%] md:w-[80%] h-auto rounded-lg"
          />
        </div>

        {/* Left Text Section */}
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292B29]">
              Better HELOC
            </h3>
            <p className="text-[#292B29] text-lg mt-2">
              Introducing One Day HELOC™—your express lane to getting cash from
              your home with our Home Equity Line of Credit.
            </p>
          </div>
          {/* Arrow Button */}
          <div className="w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full transition-all duration-300 hover:bg-[#006D3D] hover:text-white hover:border-[#006D3D] hover:border-[3px]">
            <FaArrowRight className="text-[#292B29] hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Insurance Card - 368px Width */}
      <div className="bg-[#EFF8F1] rounded-lg p-6 md:p-8 flex flex-col justify-between w-[368px] h-[260px]">
        <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292B29]">
          Insurance
        </h3>
        <div className="flex justify-between items-end">
          {/* Arrow Button */}
          <div className="w-10 h-10 flex items-center justify-center border-2 border-[#292B29] rounded-full transition-all duration-300 hover:bg-[#006D3D] hover:text-white hover:border-[#006D3D] hover:border-[3px]">
            <FaArrowRight className="text-[#292B29] hover:text-white transition-colors duration-300" />
          </div>
          <img
            src="./insurance.webp"
            alt="Insurance"
            className="w-[80px] md:w-[100px] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
      </section>
    );
  }
  
  export default Main2;