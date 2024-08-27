'use client';

import { useState, useEffect } from "react";
import { DesktopIcon } from "@/components/DesktopIcon";
import { TaskBar } from "@/components/TaskBar";
import Modal from '@/components/Modal';
import Limbo from "@/components/Limbo";
import Lust from "@/components/Lust";
import Gluttony from "@/components/Gluttony";
import Greed from "@/components/Greed";
import Wrath from "@/components/Wrath";
import Heresy from "@/components/Heresy";
import Violence from "@/components/Violence";
import Fraud from "@/components/Fraud";
import Treachery from "@/components/Treachery";

// Import other components as needed

type CircleName = 'Limbo' | 'Lust' | 'Gluttony' | 'Greed' | 'Wrath' | 'Heresy' | 'Violence' | 'Fraud' | 'Treachery';

export default function Home() {
    const [time, setTime] = useState(new Date());
    const [openCircle, setOpenCircle] = useState<CircleName | null>(null);

    useEffect(() => {
        setTime(new Date());

        const timerId = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timerId);
    }, []);

    const openModal = (circleName: CircleName) => {
        console.log(`openModal function called for ${circleName}`);
        setOpenCircle(circleName);
    };

    const closeModal = () => {
        console.log('closeModal function called');
        setOpenCircle(null);
    };

    useEffect(() => {
        console.log(`Modal state is now: ${openCircle}`);
    }, [openCircle]);

    const circlesOfHell = [
        {
            name: 'Limbo',
            imgSrc: '/Limbo.png',
            onClick: () => openModal('Limbo' as CircleName),
        },
        {
            name: 'Lust',
            imgSrc: '/Lust.png',
            onClick: () => openModal('Lust' as CircleName),
        },
        { 
            name: 'Gluttony',
            imgSrc: '/Gluttony.png', 
            onClick: () => openModal('Gluttony' as CircleName) 
        },
        {
            name: 'Greed', 
            imgSrc: '/Greed.png', 
            onClick: () => openModal('Greed' as CircleName) 
        },
        { 
            name: 'Wrath', 
            imgSrc: '/Wrath.png', 
            onClick: () => openModal('Wrath' as CircleName) 
        },
        {
             name: 'Heresy', 
             imgSrc: '/Heresy.png', 
             onClick: () => openModal('Heresy' as CircleName) 
        },
        { 
            name: 'Violence',
            imgSrc: '/Violence.png', 
            onClick: () => openModal('Violence' as CircleName) 
        },
        { 
            name: 'Fraud', 
            imgSrc: '/Fraud.png', 
            onClick: () => openModal('Fraud' as CircleName) 
        },
        { 
            name: 'Treachery', 
            imgSrc: '/Treachery.png', 
            onClick: () => openModal('Treachery' as CircleName) 
        }
    ];

    const renderModalContent = (circleName: CircleName) => {
        switch (circleName) {
            case 'Limbo':
                return <Limbo />;
            case 'Lust':
                return <Lust />;
            case 'Gluttony':
                return <Gluttony />;
            case 'Greed':
                return <Greed />;
            case 'Wrath':
                return <Wrath />;
            case 'Heresy':
                return <Heresy />;
            case 'Violence':
                return <Violence />;
            case 'Fraud':
                return <Fraud />;
            case 'Treachery':
                return <Treachery />;
            // Add cases for other circles and their corresponding components
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
                {circlesOfHell.map(circle => (
                    <DesktopIcon
                        key={circle.name}
                        name={circle.name}
                        imgSrc={circle.imgSrc}
                        onClick={circle.onClick}
                    />
                ))}
            </div>

            <TaskBar time={time} />

            {openCircle && (
                <Modal isOpen={!!openCircle} closeModal={closeModal}>
                    {renderModalContent(openCircle)}
                </Modal>
            )}

<div className="absolute bottom-20 sm:bottom-10 md:bottom-20 lg:bottom-40 xl:bottom-60 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10 text-6xl font-bold text-white text-center md:text-left" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
    <span className="text-red-500">DANTE&apos;S</span> <span className="text-red-700">INFERNO</span>
</div>
        </div>
    );
}
