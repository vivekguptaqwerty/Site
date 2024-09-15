import '../css/Home3D.css';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Overview = ({ opacity }) => {
    const { t } = useTranslation();

    return (
        isMobile ? <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            position: "relative",
        }}>
            <div className='overview-content' style={{
                opacity: opacity,
                flex: 1
            }}>
                <p className='hello-title'>
                    {t("overview.hello")}  <span className="name">to</span> <span className="wave">👋🏻</span>
                </p>
                <p className='fontBodyNormalHome3D'>
                    {t("overview.first_para")} 🌍
                </p>
                <p className='fontBodyNormalHome3D'>{t("overview.second_para")} 🔥</p>
                <p className='fontBodyNormalHome3D'>{t("overview.third_para")} 🔥</p>
                <div className='container-btns'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-contact-youtube" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-contact-facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-contact-instagram" />
                    </a>
                    
                </div>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <p className='scroll-content'>{t("overview.embark")}</p>
                    <div className='field'>
                        <div className='mouse' />
                    </div>
                </div>
            </div>
        </div> : <div style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            position: "relative",
        }}>
            <div className='overview-content' style={{
                opacity: opacity,
                flex: 1,
            }}>
                <p className='hello-title'>
                    {t("overview.hello")}  <span className="name">to</span> <span className="wave">👋🏻</span>
                </p>
                <p className='fontBodyNormalHome3D'>
                    {t("overview.first_para")} 🌍
                </p>
                <p className='fontBodyNormalHome3D'>{t("overview.second_para")} 🔥</p>
                <p className='fontBodyNormalHome3D'>{t("overview.third_para")} 🔥</p>
                <div className='container-btns'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-contact-youtube" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-contact-facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className="icon-contact-instagram" />
                    </a>
                </div>
            </div>
            <div style={{
                opacity: opacity,
                display: "flex",
                alignItems: "end",
                justifyContent: "start",
                margin: "0 5% 0 5%"
            }}>
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <p className='scroll-content'>{t("overview.embark")}</p>
                    <div className='field'>
                        <div className='mouse' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
