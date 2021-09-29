import React from 'react';
import exploreStyle from '../style/explore.module.css';
import style from '../style/profile.module.css';
import { Link } from 'react-router-dom';
import { BsAt, BsUpload, BsPlus } from 'react-icons/bs';
import { AiOutlineSetting, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

export default function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`}>
                        <Link to="/home">
                            <img 
                                src="/images/arrow.png" 
                                alt="arrow"
                                className={exploreStyle.arrow_icon} 
                            />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/images/1.jpg" alt="user" className={style.profile_image}/>
                <h4>bla blabla</h4>
                <p>@cleverqazi</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p>
                    <p>
                        <span>51</span> following
                    </p>
                </div>
                <button>Addd a bio</button>
                <div className="mb-4">
                    <button className="mb-0">
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button className="mb-0">
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/1.jpg" alt="user" />
                    <div>
                        <p>Joined 37-July-2021</p>
                        <p>
                            Nominated by <span>xevisberi gocha</span>
                        </p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>
    )
}
