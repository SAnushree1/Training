import React, { useState } from 'react'
import ListSection from './ListSection';

interface Job {
    jobTitle: string;
    experience: string;
    jodDesc: string;
    requirements: string[];
    preferredSkills: string[];
}

const cardContent: Job[] = [
    {
        jobTitle: "Flutter Developer",
        experience: "4 to 8 Yrs experience",
        jodDesc: "To build cross-platform mobile apps for Android, IOS, and Web on Flutter. This should include making responsive UIs to efficiently query data and also manage states in an optimized manner.",
        requirements: ["1–3 years of Flutter/Dart experience", "Experience with REST APIs, Firebase, Git", "Strong understanding of UI/UX principles", "Ability to write clean, maintainable code"],
        preferredSkills: ["Published apps on App Store/Play Store.", "Experience with state management (Bloc, Provider, Riverpod)"]
    },
    {
        jobTitle: "SDE III Developer",
        experience: "4 to 8 Yrs experience",
        jodDesc: "To build cross-platform mobile apps for Android, IOS, and Web on Flutter. This should include making responsive UIs to efficiently query data and also manage states in an optimized manner.",
        requirements: ["1–3 years of Flutter/Dart experience", "Experience with REST APIs, Firebase, Git", "Strong understanding of UI/UX principles", "Ability to write clean, maintainable code"],
        preferredSkills: ["Published apps on App Store/Play Store.", "Experience with state management (Bloc, Provider, Riverpod)"]
    },
    {
        jobTitle: "Python Developer",
        experience: "4 to 8 Yrs experience",
        jodDesc: "To build cross-platform mobile apps for Android, IOS, and Web on Flutter. This should include making responsive UIs to efficiently query data and also manage states in an optimized manner.",
        requirements: ["1–3 years of Flutter/Dart experience", "Experience with REST APIs, Firebase, Git", "Strong understanding of UI/UX principles", "Ability to write clean, maintainable code"],
        preferredSkills: ["Published apps on App Store/Play Store.", "Experience with state management (Bloc, Provider, Riverpod)"]
    }
]

const JobOpenings: React.FC = () => {

    const [expandedCard, setexpandedCard] = useState<number | null>(null);

    const toggleexpandedCard = (index: number) => {
        setexpandedCard(expandedCard === index ? null : index);
    }

    return (
        <>
            {cardContent.map((item, index) => (
                <div key={index} className='bg-white text-black flex flex-col sm:flex-row sm:gap-2 justify-between p-5 rounded-2xl m-3'>
                    <div>
                        <h3 className='font-bold'>{item.jobTitle}</h3>
                        <p>{item.experience}</p>
                    </div>
                    <div className='max-w-3xl'>
                        <p>{item.jodDesc}</p>
                        <div className={expandedCard === index ? 'block' : 'hidden'}>
                            <ListSection title="Requirements:" items={item.requirements} />
                            <ListSection title="Nice to have:" items={item.preferredSkills} />
                        </div>
                    </div>
                    <div>
                        <p className='underline cursor-pointer font-bold' onClick={() => toggleexpandedCard(index)}>{expandedCard === index ? "Less" : "More"}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default JobOpenings
