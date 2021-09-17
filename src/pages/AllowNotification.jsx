import React from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';

export default function AllowNotification() {
    return (
        <div className={style.PhoneConfirmContainer}>
            <div className="text-center">
                <h1 className='mb-4'>Last, importent step!</h1>
                <h1 className='mb-3'>Enable notification to when people are talking</h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, inventore! Itaque, ad! Nulla corporis</h3>
                        <p>Enable notification to when people are talking</p>
                    </div>
                    <div className={style.action_btn}>
                        <Link
                            exact
                            to='/home'>
                                Don't Allow
                        </Link>
                        <Link
                            exact
                            to='/home'>
                                Allow
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
    )
}
