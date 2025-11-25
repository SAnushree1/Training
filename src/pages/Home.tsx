import React from "react";
import MeskyHome from '../components/homeComponents/MeskyHome'
import MeskyContent from '../components/homeComponents/MeskyContent'
import WhyMeskyContent from '../components/homeComponents/WhyMeskyContent'

const Home: React.FC = () => {
    return (
        <>
            <MeskyHome />
            <MeskyContent />
            <WhyMeskyContent />
        </>
    );
};

export default Home;
