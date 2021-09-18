import React from 'react';
import style from '../../App.css';

export default function AppLayout({children}) {
    return (
        <div className={style.app_layout}>
            {children}
        </div>
    )
}
