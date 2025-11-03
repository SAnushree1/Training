import React from "react";
import MeskyHome from '../components/homeComponents/MeskyHome.jsx'
import MeskyContent from '../components/homeComponents/MeskyContent.jsx'
import WhyMeskyContent from '../components/homeComponents/WhyMeskyContent.jsx'

const Home = () => {
  return (
    <>
      <MeskyHome/>
      <MeskyContent/>
      <WhyMeskyContent/>
    </>
  );
};

export default Home;