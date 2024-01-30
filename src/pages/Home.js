import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { Carousel } from "../sections/home/Carousel";
import SchemeForYou from "../sections/home/schemeForYou";
import SchemeCard from "../sections/home/schemeCard";
import SchemeTabs from "../sections/home/categoryTab";
import HowItWorks from "../sections/home/how it works";
import AboutHome from "../sections/home/abouthome";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <SchemeForYou />
      <SchemeCard />
      <SchemeTabs />
      <HowItWorks />
      <AboutHome />
      {/* <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div> */}
    </Layout>
  );
};

export default Home;
