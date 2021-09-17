import React, { useState, useEffect } from 'react';
import style from "../style/roomCard.module.css";
import data from "../data/rooomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs'

export default function RoomInfoCard(props) {
    return (
        <>
            {data.map((item) => (
                <div>
                    <div>
                        <div className={style.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                            <div className={style.roomMembers}>
                                <div>
                                    <img src="/images/1.jpg" alt="user-1" />
                                    <img src="/images/1.jpg" alt="user-1" />
                                </div>
                                <div>
                                    {item.members.map((person) => (
                                        <p>
                                            {person.first_name} {person.last_name} <BsChatDots />
                                        </p>
                                    ))}
                                    <p className="d-flex align-items-center">
                                        <span className="mr-2">1.6</span>
                                        <BsFillPersonFill />
                                        <span className="mx-2"></span>{" "}
                                        <span className="mr-2">45</span>
                                        <BsChatDotsFill />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
