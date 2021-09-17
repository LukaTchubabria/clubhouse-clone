import React from 'react';
import style from '../style/phoneConfirm.module.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DateRangeIcon from '@material-ui/icons/DateRange';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Header() {
    return (
        <div className={style.Header}>
            <Link
                exact
                to="/explore">
                    <SearchIcon className="search"/>
            </Link>
            <div className={style.nav_items}>
                <Link
                    exact
                    to="/friends_invite">
                        <ContactMailIcon />
                </Link>

                <Link
                    exact
                    to="/upcoming">
                        <DateRangeIcon />
                </Link>

                <Link
                    exact
                    to="/activity">
                        <NotificationsNoneIcon />
                </Link>

                <Link
                    exact
                    to="/profile">
                        {/* aq unda chavsva profilis suraTi */}
                        <ContactMailIcon />
                </Link>
            </div>
        </div>
    )
}
