import React, { useState } from 'react';
import style from '../../style/roomDetail.module.css';
import { AiOutlinePlus, AiOutlineFile } from 'react-icons/ai';
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const card = props.cardDetail;
    return (
        <>
         <div className={style.roomDetailContainer}>
             <div className={style.head}>
                <div className="d-flex align-items-center">
                    <a 
                        href="#"
                        onClick={() => {
                            props.setSheetVisible(false);
                        }}
                    >
                        <ExpandMoreIcon />
                    </a>
                    <span>Hallway</span>
                </div>
                <div>
                    <AiOutlineFile />
                    <img className={style.profile_img} src="/images/1.jpg" alt="user-1" />
                </div>
             </div>
             <div className={style.roomDetailCard}>
                <div 
                    className="d-flex align-items-center justify-content-between flex-wrap"
                    style={{padding: "0.5em 1em"}}
                >
                    {card.members.map((item) => (
                        <div className={style.memberContainer}>
                            {micMuteVisible ? (
                                <div className={style.audio_icon}>
                                    <BsMicMuteFill />
                                </div>
                            ) : (
                                ""
                            )}
                            <img src="/images/1.jpg" alt="profile" />
                            <p>
                                <span>*</span>
                                {item.first_name}
                            </p>
                        </div>
                    ))}
                </div>
             </div>
            <div className={style.footer}>
                <button
                    onClick={() => {
                        props.setSheetVisible(false)
                    }}
                >
                    <img src="/images/hand-peace.png" alt="hand-peace" />
                    Leave Quietly
                </button>
                <div>
                    <button>
                        <AiOutlinePlus />
                    </button>
                    <button>
                        <img src="/images/stopHandIcon.png" alt="stopicon" />
                    </button>
                    <button
                        onClick={() => setMicMuteVisible(!micMuteVisible)}>
                            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                    </button>
                </div>
            </div>
         </div>
        </>
    )
}
