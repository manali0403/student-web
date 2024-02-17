import React from "react";
import Navbar from "../components/Navbar";
import FirstPage from "../components/FirstPage";
import Plans from "../components/Plans";
import About from "../components/About";
import Information from "../components/Information";
import AffiliateLink from "../components/AffiliateLink";
import CommunityPage from "../components/CommunityPage";
import Overview from "../components/Overview";
import { Footer } from "../components/Footer";
import { New } from "../components/New";

export const HomePage = () => {
  return (
    <div className="flex flex-col bg-[#1A2B33] ">
      <Navbar />
      <FirstPage />
      <About />
      <Overview />
      <Information />
      <Plans />
      <New/>
      <AffiliateLink />
      <CommunityPage />
      <Footer />
    </div>
  );
};
