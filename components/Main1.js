
function Main1() {
    return (
      <section className="flex flex-col md:flex-row items-center px-6 md:px-[120px] py-[120px] bg-white">
        {/* Left Side - Image and Testimonial */}
        <div className="max-w-sm">
          <div className="relative bg-black rounded-xl overflow-hidden shadow-lg w-[calc(100%-60px)] h-[calc(100%-90px)]">
            <img
              src="./still-quote-Arian.webp"
              alt="Arian Testimonial"
              className="w-full h-auto"
            />
          </div>
  
{/* Buttons for Names */}
<div className="flex gap-4 mt-6"> {/* Gap between buttons */}
  {/* Arian Button */}
  <button className="relative border-[4px] border-green-900 text-green-900 px-6 py-2 rounded-full font-semibold box-border">
    Arian
  </button>

  {/* Amanda Button */}
  <button className="relative text-gray-600 px-6 py-2 rounded-full font-semibold box-border overflow-hidden 
    before:absolute before:inset-0 before:border-[2px] before:border-gray-400 before:rounded-full before:transition-all before:duration-300 
    hover:before:border-[4px] hover:before:border-green-900 hover:text-green-900">
    Amanda
  </button>

  {/* Paul Button */}
  <button className="relative text-gray-600 px-6 py-2 rounded-full font-semibold box-border overflow-hidden 
    before:absolute before:inset-0 before:border-[2px] before:border-gray-400 before:rounded-full before:transition-all before:duration-300 
    hover:before:border-[4px] hover:before:border-green-900 hover:text-green-900">
    Paul
  </button>
</div>
        </div>
  
        {/* Right Side - CTA and Trustpilot */}
        <div className="text-center md:text-left max-w-md ml-[110px]">
          {/* Heading in Two Lines with Bigger Font */}
          <h2 className="text-[73px] md:text-[73px] leading-[1.1] font-bold text-[#292B29]">
            <div>Find out why</div>
            <div>we’re better.</div>
          </h2>
  
          <button className="mt-6 bg-green-900 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-700">
            See all our stories
          </button>
  
          {/* Trustpilot Section */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-2">
            <span className="text-green-600 font-semibold text-lg">★ Trustpilot</span>
            <span className="font-semibold text-lg">Excellent</span>
            <span className="text-gray-600 text-lg">4.4 out of 5</span>
          </div>
        </div>
      </section>
    );
  }
  
  export default Main1;
  