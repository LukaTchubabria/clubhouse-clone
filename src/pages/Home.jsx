import React from 'react';
import Header from '../components/Header';
import DailyinfoCard from '../components/DailyinfoCard';
import style from '../style/home.module.css'; 
import RoomInfoCard from '../components/RoomInfoCard';

export default function Home() {
    return (
        <>
            <Header />
            <div className={style.home_container}>
                <DailyinfoCard />
                <RoomInfoCard />
            </div>
        </>
    )
}
