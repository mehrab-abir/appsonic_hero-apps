import React from "react";
import Banner from "./Banner";
import StatesSection from "./StatesSection";
import TrendingApps from "./TrendingApps";


const Home = () => {
  return (
    <>
    <title>AppSonic - Home</title>
    <Banner></Banner>
    <StatesSection/>
    <TrendingApps></TrendingApps>
    </>
  );
};

export default Home;
