// "use client";

// import { useEffect, useState } from "react";
// import Head from "next/head";
// import styles from "../styles/Home.module.css"
// export default function Home() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Better Mortgage</title>
//         <meta name="description" content="A Next.js replica of Better.com" />
//       </Head>

//       {/* Navbar */}
//       <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
//         <div className={styles.navContent}>
//           <span className={styles.logo}>Better</span>
//           <ul className={styles.navLinks}>
//             <li>Buy</li>
//             <li>Refinance</li>
//             <li>HELOC</li>
//             <li>Rates</li>
//             <li>Better+</li>
//           </ul>
//           <button className={styles.signIn}>Sign In</button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className={styles.heroSection}>
//         <h1>Mortgages made simple</h1>
//         <button className={styles.approvalButton}>Start my approval</button>
//       </header>

//       {/* Story Section */}
//       <section className={styles.storySection}>
//         <div className={styles.storyContent}>
//           <p>Find out why we’re better.</p>
//           <button className={styles.storyButton}>See all our stories</button>
//         </div>
//       </section>

//       {/* Global Styles */}
//       <style jsx>{`
//         .${styles.container} {
//           font-family: Arial, sans-serif;
//         }

//         .${styles.navbar} {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           background-color: #004d00;
//           transition: background-color 0.3s;
//           padding: 10px 20px;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .${styles.navbar}.scrolled {
//           background-color: white;
//         }

//         .${styles.heroSection} {
//           height: 100vh;
//           background-color: #004d00;
//           color: white;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//         }

//         .${styles.approvalButton} {
//           background-color: #00cc00;
//           padding: 10px 20px;
//           border: none;
//           cursor: pointer;
//           border-radius: 5px;
//         }

//         .${styles.storyButton} {
//           background-color: #004d00;
//           padding: 10px 20px;
//           border: none;
//           cursor: pointer;
//           border-radius: 5px;
//           transition: background-color 0.3s;
//         }

//         .${styles.storyButton}:hover {
//           background-color: #00cc00;
//         }
//       `}</style>
//     </div>
//   );
// }
import Main1 from '@/components/Main1';
import Main2 from '@/components/Main2';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='mt-0'>
      <Hero id="hero-section" />
      <Main1 />
      <Main2 />
    </div>
  );
}
