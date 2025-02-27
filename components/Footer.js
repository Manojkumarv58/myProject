import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAF8] text-gray-700  px-6 md:px-16 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-green-700 text-3xl font-bold">Better</h2>
          <p className="mt-4">
            Better is a family of companies serving all your homeownership needs.
          </p>
          <div className="mt-6 space-y-4">
            {[
              { title: "Mortgage", text: "We can’t wait to say 'Welcome home.' Apply 100% online, with expert customer support." },
              { title: "Real Estate", text: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save." },
              { title: "Cover", text: "Shop, bundle, and save on insurance coverage for home, auto, life, and more." },
              { title: "Inspect", text: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee." },
              { title: "Settlement Services", text: "Get transparent rates when you shop for title insurance all in one convenient place." }
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-green-700 font-bold inline">{`Better `}</h3>
                <span className="text-gray-500 font-semibold">{item.title}</span>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Sections */}
        <div>
          <h3 className="font-semibold text-gray-900">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Home affordability calculator",
              "Mortgage calculator",
              "Free mortgage calculator",
              "Mortgage calculator with taxes",
              "Mortgage calculator with PMI",
              "Rent vs buy calculator",
              "HELOC payment calculator",
              "HELOC vs cash-out refinance calculator",
              "Buy a home",
              "Sell a home",
              "Get home inspection",
            ].map((link, index) => (
              <li key={index} className="hover:text-green-700 cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["About Us", "Careers", "Media", "Partner With Us", "Learning center", "FAQs", "Investor Relations"].map(
              (link, index) => (
                <li key={index} className="hover:text-green-700 cursor-pointer">{link}</li>
              )
            )}
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-gray-900">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="text-green-700 font-medium">hello@better.com</li>
            <li className="text-green-700 font-medium">415-523-8837</li>
            <li className="hover:text-green-700 cursor-pointer">FAQ</li>
            <li className="hover:text-green-700 cursor-pointer">Glossary</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-6">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "NMLS Consumer Access",
              "Privacy Policy",
              "Terms of Use",
              "Disclosures & Licensing",
              "Affiliated Business",
              "Browser Disclaimer",
            ].map((link, index) => (
              <li key={index} className="hover:text-green-700 cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
