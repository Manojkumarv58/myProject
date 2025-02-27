"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import ResourceCard from "@/components/ResourceCard";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(homePrice * 0.2);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("845418");
  const [expenses, setExpenses] = useState({
    propertyTaxes: 265,
    homeInsurance: 132,
    hoaFees: 132,
    utilities: 100,
  });

  useEffect(() => {
    setDownPayment(homePrice * 0.2);
  }, [homePrice]);

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;
  const principalAndInterest =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));

  const totalPayment =
    principalAndInterest +
    expenses.propertyTaxes +
    expenses.homeInsurance +
    expenses.hoaFees +
    expenses.utilities;

  const data = [
    { name: "Principal & Interest", value: principalAndInterest, color: "#16a34a" },
    { name: "Property Taxes", value: expenses.propertyTaxes, color: "#7c3aed" },
    { name: "Homeowners Insurance", value: expenses.homeInsurance, color: "#2563eb" },
    { name: "HOA Fees", value: expenses.hoaFees, color: "#facc15" },
    { name: "Utilities", value: expenses.utilities, color: "#ef4444" },
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen px-0 py-0">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-4">Mortgage Calculator</h1>

        {/* Home Price */}
        <div className="mb-6 text-black">
          <label className="block text-lg font-semibold mb-2">Home Price</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-xl font-bold">$</span>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full text-xl font-bold pl-10 pr-4 py-3 border-2 border-gray-400 rounded-md"
            />
          </div>
          <input
            type="range"
            min="50000"
            max="3000000"
            step="5000"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full mt-3"
          />
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 md-grid-cols-4 text-black gap-6">
          <div>
            <label className="block font-semibold mb-1">ZIP Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full text-lg font-bold border-2 border-gray-400 rounded-md px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Down Payment (20%)</label>
            <input
              type="number"
              value={downPayment}
              readOnly
              className="w-full text-lg font-bold bg-gray-200 border-2 border-gray-400 rounded-md px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full text-lg font-bold border-2 border-gray-400 rounded-md px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Loan Term</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full text-lg font-bold border-2 border-gray-400 rounded-md px-4 py-3"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>
        </div>

        {/* Estimated Payment Display */}
        <div className="text-center bg-green-100 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-black">Estimated Monthly Payment</h2>
          <p className="text-3xl font-bold text-green-700">${totalPayment.toFixed(2)}/mo</p>
        </div>

        {/* Pie Chart */}
        <div className="mt-6 p-6 bg-gray-100 shadow-md rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-black mb-4">Monthly Payment Breakdown</h2>
          <div className="flex justify-center mt-6">
            <PieChart width={400} height={300}>
              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Get Approved Button */}
        <div className="mt-6 text-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Get Approved
          </button>
        </div>
         {/* How does a mortgage calculator help me  */}
      <hr style={{ border: "1px solid black", width: "100%" }} className="mt-4" />
      <h1 className="text-black text-center mt-6"><b>How does a mortgage calculator help me ?</b></h1>
       <p className="text-black mt-3">When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
       
       {/* how much monthy payment i can afford */}
       <hr style={{ border: "1px solid black", width: "100%" }} className="mt-4" />
      <h1 className="text-black text-center mt-6"><b>How much monthly mortgage payment can I afford?
</b></h1>
       <p className="text-black mt-3">Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.

Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
<br></br>
{/* formula for DTI */}
<p className="text-black ">Formula for calculating your debt-to-income (DTI) ratio:</p>

<img src="./dti-formula.jpg" alt="Description" width="4000"  className="m-auto" />
<br></br>
<p className="text-black">Here’s an example of what calculating your DTI might look like:</p>
<img src="./dti-example.jpg" alt="Description" width="4000"  className="m-auto" />
{/* mortage calculation formula */}

<h1 className="text-black text-center mt-6"><b>How to calculate monthly mortgage payments?</b></h1>
<p className="text-black">Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
<p className="text-black  mt-4"><b>Formula for calculating monthly mortgage payments</b></p>
<p className="text-black">The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>

<img src="./monthly-mortgage-payments-formula.jpg" alt="Description" width="4000"  className="m-auto" />

<p className="text-black text-center m-auto" style={{ fontSize: "12px", textAlign: "left" }}>
      <ul style={{ listStyleType: "disc" }}>
        <li><strong>Where:</strong></li>
        <li><strong>M</strong> is monthly mortgage payments</li>
        <li><strong>P</strong> is the principal loan amount (the amount you borrow)</li>
        <li>
          <strong>r</strong> is the monthly interest rate
          <ul>
            <li>Annual interest rate divided by 12 and expressed as a decimal</li>
            <li>For example, if the annual interest rate is 5%, the monthly rate would be 0.05/12 = 0.00417, or 0.417%</li>
          </ul>
        </li>
        <li>
          <strong>n</strong> is the total number of payments in months
          <ul>
            <li>For example, for a 30-year loan, n = 30×12 = 360 months</li>
          </ul>
        </li>
      </ul>
    </p>
    <p className="text-black mt-4">Here’s a simple example:</p>
    <img src="./monthly-mortgage-payments-example.jpg" alt="Description" width="4000"  className="m-auto" />
    {/*  */}
    <h2 className="text-2xl font-bold mb-4 text-black">How to Use This Mortgage Calculator</h2>
<p className="mb-4 text-black">
  Adjust the home price, location, down payment, interest rate, and loan term to see how they affect your monthly mortgage payment.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">Key Factors That Impact Your Mortgage Payment:</h3>
<ul className="list-disc list-inside mt-2 space-y-2 text-black">
  <li><strong>Down Payment:</strong> A higher down payment lowers your monthly payment. If it's less than 20%, private mortgage insurance (PMI) will be added.</li>
  <li><strong>Interest Rate & Loan Term:</strong> Lower interest rates and shorter loan terms reduce monthly payments.</li>
  <li><strong>Taxes, Insurance & HOA Fees:</strong> These vary by location and can be added to your estimate. If you're buying a condo or a home in an HOA community, be sure to include HOA fees.</li>
  <li><strong>Utility Costs:</strong> Since utility expenses differ by county, we've included an estimate that can be broken down by service.</li>
</ul>

<h3 className="text-xl font-semibold mt-6 text-black">What’s Not Included?</h3>
<ul className="list-disc list-inside mt-2 space-y-2 text-black">
  <li>Annual maintenance/repair costs</li>
  <li>Home improvement expenses</li>
</ul>

<p className="mt-4 text-black">
  For a complete picture of what you can afford, check out the <a href="#" className="text-blue-500 underline">Better Home Affordability Calculator</a>.
</p>

<blockquote className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg text-black">
  <p className="font-medium text-black">
    💡 <strong>Fun Fact:</strong> Property tax rates can vary drastically—even between two similar homes in neighboring areas! Choosing a home in a lower-tax area could make a higher-priced home more affordable.
  </p>
</blockquote>
 {/*  */}
 <hr style={{ border: "1px solid black", width: "100%" }} className="mt-4" />
 {/*  */}
 <h2 className="text-2xl font-bold mb-4 text-black">How is Better’s Mortgage Calculator Different?</h2>

<h3 className="text-xl font-semibold mt-4 text-black">This Mortgage Calculator Shows Your Payments with Taxes and Insurance</h3>
<p className="mb-4 text-black">
  The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
</p>
<p className="mb-4 text-black">
  Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.
</p>
<p className="mb-4 text-black">
  Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">This Mortgage Calculator Shows Your Mortgage Costs with PMI</h3>
<p className="mb-4 text-black">
  PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
</p>
<p className="mb-4 text-black">
  Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.
</p>
<p className="mb-4 text-black">
  PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">This Mortgage Calculator Includes HOA Fees</h3>
<p className="mb-4 text-black">
  Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.
</p>
<p className="mb-4 text-black">
  Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.
</p>

 {/*  */}
 <hr style={{ border: "1px solid black", width: "100%" }} className="mt-4" />
{/*  */}
<h2 className="text-2xl font-bold mb-4 text-black">How is Better’s Mortgage Calculator Different?</h2>

<h3 className="text-xl font-semibold mt-4 text-black">This Mortgage Calculator Shows Your Payments with Taxes and Insurance</h3>
<p className="mb-4 text-black">
  The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
</p>
<p className="mb-4 text-black">
  Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.
</p>
<p className="mb-4 text-black">
  Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">This Mortgage Calculator Shows Your Mortgage Costs with PMI</h3>
<p className="mb-4 text-black">
  PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
</p>
<p className="mb-4 text-black">
  Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.
</p>
<p className="mb-4 text-black">
  PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">This Mortgage Calculator Includes HOA Fees</h3>
<p className="mb-4 text-black">
  Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.
</p>
<p className="mb-4 text-black">
  Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.
</p>

<h2 className="text-2xl font-bold mb-4 text-black">How to Reduce Your Monthly Mortgage Payments?</h2>
<p className="mb-4 text-black">
  The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">Extend the Length of Your Mortgage</h3>
<p className="mb-4 text-black">
  The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">Increase Your Down Payment</h3>
<p className="mb-4 text-black">
  The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.
</p>

<h3 className="text-xl font-semibold mt-4 text-black">Get a Lower Interest Rate</h3>
<p className="mb-4 text-black">
  Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).
</p>
<p className="mb-4 text-black">
  Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.
</p>
<p className="mb-4 text-black">
  If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.
</p>
<p className="mb-4 text-black">
  If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.
</p>
 {/*  */}
 <h2 className="text-2xl font-bold mb-4 text-black">How Much Home Can I Afford?</h2>
<p className="mb-4 text-black">
  Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
</p>

<h2 className="text-2xl font-bold mb-4 text-black">Next Steps to Buying a House</h2>
<p className="mb-4 text-black">
  There are 8 steps to buying a house, and by using this calculator, you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).
</p>
<p className="mb-4 text-black">
  The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3 minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.
</p>
<p className="mb-4 text-black">
  If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase.
</p>
<p className="mb-4 text-black">
  By working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs and save up to $8,200 on average over the life of your loan.**
</p>
 {/*  */}
 <h2 className="text-2xl font-bold text-center mb-6 text-black">More resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResourceCard
          icon="📄"
          title="Get pre-approved to see how much you can borrow"
          description="Won't impact your credit"
          linkText="Get started"
          linkUrl="#"
        />
        <ResourceCard
          icon="📉"
          title="See today's rates in your area"
          description=""
          linkText="See rates"
          linkUrl="#"
        />
        <ResourceCard
          icon="🏡"
          title="Find out your max homebuying budget"
          description=""
          linkText="Try our mortgage calculator"
          linkUrl="#"
        />
      </div>
 {/*  */}

    </div>  
    </div>
  );

};

export default MortgageCalculator;
