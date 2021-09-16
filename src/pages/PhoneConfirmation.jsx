import React, { useState } from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import ArrowBackIosIcon  from '@material-ui/icons/ArrowBackIos';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function PhoneConfirmation() {
    const [value, setValue] = useState();
    return (
        <div className={style.phoneConfirmContainer}>
            <Link exact to="/" className={style.backBtn}>
                <ArrowBackIosIcon  className={style.arrowBackIosIcon}/>
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput 
                international 
                defaultCountry="US" 
                value={value} 
                onChange={setValue}/>
            <p>By entering you number, you're agreeing to our {" "}
                <span>Terms of Service and Privacy Policy</span>
            </p>
            <Link 
                exact to="/code-confirm"
                className="primaryBtn d-flex align-items-center">
                    Next 
                    <NavigateNextIcon className="ml-1"/>
            </Link>
        </div>
    );
};