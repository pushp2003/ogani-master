import React from "react";
import Header from "../../components/header/header";
// import "../../components/header.css";
import Ban1 from "../../components/banners/ban1";
import Footer from "../../components/footer/footer";
import './home';

const Home = () => {
  return (
    <div>
      <Header />
      <Ban1 />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
