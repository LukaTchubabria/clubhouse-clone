import React from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer}>
            <div className="text-center">
                <h1 style={{width: '100%', marginBottom: '1em'}}>Enter the code just texted you</h1>
                <input 
                    type='text'
                    style={{
                        width: '100%',
                        border: 'none',
                        textAlign: 'center',
                        outline: 'none'
                    }} />
                <p className='mt-2'>Didn't recive it?<span>Tap to resend.</span>
                </p>
            </div>
            <Link
                exact
                to="/allow-notification"
                className="primaryBtn d-flex align-items-center">
                    Next 
                    <NavigateNextIcon className="ml-1"/>
            </Link>
        </div>
    )
}
