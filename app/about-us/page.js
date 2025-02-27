"use client"
import React, { useState } from "react";
import Link from "next/link";

const investors = [
  { name: "SoftBank", logo: "./softbank.png", link: "https://www.softbank.jp/en/" },
  { name: "Ally", logo: "./ally.png", link: "https://www.ally.com/" },
  { name: "Citi", logo: "./citi.png", link: "https://www.citigroup.com/" },
  { name: "Ping An Bank", logo: "./pingan.png", link: "https://bank.pingan.com/" },
  { name: "Goldman Sachs", logo: "./goldman.jpeg", link: "https://www.goldmansachs.com/" },
  { name: "KPCB", logo: "./kpcb.jpeg", link: "https://www.kleinerperkins.com/" },
  { name: "American Express", logo: "./American.png", link: "https://www.americanexpress.com/" }
];

const timelineData = [
  { 
    year: "2014", 
    text: "The company was founded with a vision to simplify homeownership by making the mortgage process more transparent and digital-first. The goal was to eliminate inefficiencies, reduce costs, and provide a seamless experience for homebuyers." 
  },
  { 
    year: "2015", 
    text: "A major milestone was achieved when the first mortgage was successfully funded online. This demonstrated the viability of a fully digital mortgage platform, allowing homebuyers to complete their applications remotely and without traditional paperwork." 
  },
  { 
    year: "2016", 
    text: "With increasing demand and success, the company expanded its services to multiple states, reaching a wider audience. More homebuyers could now access its innovative, technology-driven mortgage solutions, making the process faster and more convenient." 
  },
  { 
    year: "2017", 
    text: "Artificial intelligence was introduced to the mortgage approval process. This AI-driven system improved efficiency, reduced processing times, and allowed for more accurate assessments of borrower profiles, streamlining the path to homeownership." 
  },
  { 
    year: "2018", 
    text: "A significant achievement was reached as the company surpassed $1 billion in total funded loans. This milestone reinforced its growing reputation as a leader in digital mortgage solutions, proving the effectiveness of its platform." 
  },
  { 
    year: "2019", 
    text: "The company launched a fully digital homebuying experience, integrating real estate services, mortgage applications, and closing processes into one seamless platform. This advancement made homebuying more accessible, efficient, and stress-free for users." 
  },
  { 
    year: "2020", 
    text: "Recognizing the shift toward mobile-first experiences, the company optimized its platform for mobile users. Homebuyers could now apply for mortgages, check their loan status, and manage documents directly from their smartphones, enhancing convenience." 
  },
  { 
    year: "2021", 
    text: "Strategic partnerships with major financial institutions were formed, allowing the company to offer better loan options, competitive interest rates, and improved financial resources to help homebuyers secure the best possible mortgage deals." 
  },
  { 
    year: "2022", 
    text: "A major update to the loan management platform introduced new features such as real-time loan tracking, automated document submission, and enhanced customer support, helping borrowers manage their loans with greater ease and transparency." 
  },
  { 
    year: "2023", 
    text: "The company launched an AI-powered home valuation tool, providing real-time property estimates based on market data and trends. This tool empowered buyers and sellers with accurate, data-driven insights for making informed decisions." 
  },
  { 
    year: "Today", 
    text: "Continuing to innovate, the company is focused on enhancing technology, AI-driven automation, and customer-centric solutions. Its mission remains to redefine the homeownership journey, making it simpler, faster, and more accessible for everyone.",
    button: true
  }
];




const InvestorsSection = () => {
  return (
    <div className="text-center py-10 bg-gray-100 rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Backed by</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {investors.map((investor, index) => (
          <a key={index} href={investor.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md w-36 h-20 hover:shadow-lg transition">
            <img src={`${investor.logo}`} alt={investor.name} className="h-12 object-contain" />
          </a>
        ))}
      </div>
    </div>
  );
};

const CompanyTimeline = () => {
  return (
    <div className="relative max-w-3xl mx-auto mt-10">
      <h2 className="text-center text-2xl text-black font-bold mb-6">Company Timeline</h2>
      <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`flex items-center w-full mb-12 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
            {item.year}
          </div>
          <div
            className={`relative bg-white shadow-lg rounded-lg p-6 w-5/12 min-h-[100px] ${
              index % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
          >
            <p className="text-gray-700">{item.text}</p>
            {item.button && (
              <button className="mt-4 bg-green-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-900">
                <a href="/starter">Get Started</a>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "1KjYlLBM9j4";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-0 m-0 w-full">
      <div className="w-full bg-white shadow-lg p-0 m-0">
        <div className="text-center mb-6 w-full p-0">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Our Mission</h1>
          <p className="font-bold text-gray-700 leading-relaxed">
            We’re making homeownership simpler, faster — and most importantly,
            more accessible for all Americans.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full p-0">
          <div className="md:w-1/2 w-full text-left px-4 p-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">The Status Quo is Broken</h2>
            <p className="text-gray-700 font-semibold leading-relaxed mb-4">
              The traditional processes around homeownership are opaque and stressful.
              Fees aren’t transparent, and some are simply outrageous in size.
              Traditional mortgage lending is rife with unnecessary fees and slow, painful processes.
              It’s a system set up to benefit insiders — not you.
            </p>
            <button className="bg-[rgb(1,120,72)] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition">
              <a href="https://better.com/content/the-house-that-got-away-why-i-started-better-mortgage/">Read Vishal's Story</a>
            </button>
          </div>
          <div className="md:w-1/2 w-full flex justify-center px-4 p-0 mt-6 md:mt-0">
            {showVideo ? (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg w-full max-w-sm"
              ></iframe>
            ) : (
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt="YouTube Video Thumbnail"
                className="rounded-lg shadow-lg cursor-pointer w-full max-w-sm"
                onClick={() => setShowVideo(true)}
              />
            )}
          </div>
        </div>
      </div>
      <InvestorsSection />
      <CompanyTimeline />
    </div>
  );
};

export default AboutPage;
