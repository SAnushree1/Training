import React, { useRef } from 'react'
import CareerHome from '../components/careerComponents/CareerHome'
import CareerCulture from '../components/careerComponents/CareerCulture'
import CareerTeam from '../components/careerComponents/CareerTeam'

const Career: React.FC = () => {
    const scrollToTeam = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        scrollToTeam.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <CareerHome seeOpenings={handleScroll} />
            <CareerCulture />
            <div ref={scrollToTeam}>
                <CareerTeam />
            </div>
        </>
    )
}

export default Career
