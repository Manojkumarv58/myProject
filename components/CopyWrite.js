import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const CopyrightFooter = () => {
  return (
    <div className="bg-[#FAFAF8] text-gray-700 py-8 px-6 md:px-16 border-t">
      <div className="container mx-auto text-sm">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <FaFacebookF className="text-gray-700 cursor-pointer hover:text-green-700" size={20} />
          <FaInstagram className="text-gray-700 cursor-pointer hover:text-green-700" size={20} />
          <FaLinkedinIn className="text-gray-700 cursor-pointer hover:text-green-700" size={20} />
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-300 mb-4" />

        {/* Copyright & Legal Info */}
        <p className="text-justify">
          © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans;
          Better Real Estate, LLC and Better Real Estate California Inc. License #02164055 provides real estate services; Better Cover, LLC sells insurance
          products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
        </p>
        <p className="mt-4 text-justify">
          Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor,
          New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states.
          <a href="#" className="text-green-700 hover:underline"> NMLS Consumer Access</a>
        </p>
        <p className="mt-4 text-justify">
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly
          owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street,
          Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s
          <a href="#" className="text-green-700 hover:underline"> license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide
          network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
        </p>
        <p className="mt-4">
          <a href="#" className="text-green-700 hover:underline">New York State Housing and Anti-Discrimination Notice</a> |
          <a href="#" className="text-green-700 hover:underline"> New York Standard Operating Procedures</a>
        </p>
        <p className="mt-4">
          Texas Real Estate Commission:
          <a href="#" className="text-green-700 hover:underline"> Information About Brokerage Services</a> |
          <a href="#" className="text-green-700 hover:underline"> Consumer Protection Notice</a>
        </p>
        <p className="mt-4">
          Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
        </p>
        <p className="mt-4">
          Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807,
          Philadelphia, PA 19106.
        </p>
        <p className="mt-4">
          Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of
          Better Cover, LLC’s <a href="#" className="text-green-700 hover:underline">license numbers</a>.
        </p>
        <p className="mt-4">
          Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>
        <p className="mt-4 text-justify">
          Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, LLC dbs Better Attorney Match, and
          Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed
          through its own management and governance structure as required by its state of incorporation, and applicable legal and regulatory requirements. Products not
          available in all states.
        </p>
        <p className="mt-4 text-justify">
          Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain
          names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U.S. Patent
          and Trademark Office and is owned by Better Cover, LLC.
        </p>
      </div>
    </div>
  );
};

export default CopyrightFooter;