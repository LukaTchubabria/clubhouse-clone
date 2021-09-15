import React from 'react';
import style from '../style/welcome.module.css';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam autem accusamus eius et commodi aspernatur! Doloremque veniam repudiandae vitae officiis accusantium, eum, dolor nobis neque dolorum, eaque ipsum nam ipsa?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id fugit cum similique obcaecati, modi magni explicabo reprehenderit commodi facilis alias expedita earum illo aspernatur consequuntur beatae adipisci quod, praesentium delectus.
                </p>
                <p>luka tchubabria</p>
            </div>
            <div className={style.actionBtn}>
                <Link 
                    exact 
                    to="/get_username" 
                    className="primaryBtn d-flex aling-items-center mb-3">
                        Get your username {" "}
                </Link>
                <Link>
                Have an invite text? Sign in
                </Link>
            </div>
        </div>
    )
}