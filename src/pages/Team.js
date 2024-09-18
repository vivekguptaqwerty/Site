import "../css/Projects.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaLinkedin, FaGoogle, FaInstagram, FaGraduationCap } from 'react-icons/fa'; // Import icons
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { isMobile } from 'react-device-detect';

import rb from '../assets/Team/bansode-sir.jpeg';
import as from '../assets/Team/AvinashSir.png';
import mm from '../assets/Team/MM maam.jpg';
import aw from '../assets/Team/AW maam.jpg';
import kishan from '../assets/Team/KishanS.jpg';
import nikita from '../assets/Team/NikitaS.jpg';
import revati from '../assets/Team/RevatiK.jpg';
import pranay from '../assets/Team/PranayJ.png';
import krish from '../assets/Team/KrishT.jpg';
import dhruv from '../assets/Team/DhruvP.jpg';
import harsh from '../assets/Team/HarshG.png';
import sagar from '../assets/Team/SagarP.jpg';
import kaamini from '../assets/Team/KaaminiP.jpg';
import neel from '../assets/Team/NeelJ.jpg';
import { textVariant, fadeIn } from "../utils/motion";
import Slide from "../components/Slide";
const ProProjects = ({ menuOpened, t, threshold }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold
    });

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 1,
        showNavigation: false,
        enableSwipe: true,
        config: config.gentle
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject] = useState(null);

    useEffect(() => {
        const setOverflowBody = () => {
            if (selectedProject === null) {
                document.body.style.overflowY = "auto";
            } else {
                document.body.style.overflowY = "hidden";
            }
        };

        setOverflowBody();
    }, [selectedProject]);

    const slides = [
        {
            key: 1,
            img: rb,
            titleSlide: t("projects.title_project_pro_1"),
            contentSlide: t("projects.content_project_pro_1"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={rb} alt={"bansode-sir"} title={t("projects.title_project_pro_1")} content={t("projects.content_project_pro_1")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/dr-rajesh-s-bansode-01a5b01a" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://sites.google.com/view/dr-rajesh-bansode/home" target="_blank" rel="noopener noreferrer">
                            <FaGoogle className="social-icon" />
                        </a>
                        <a href="https://scholar.google.com/citations?user=gXU75VAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                            <FaGraduationCap className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 2,
            img: as,
            titleSlide: t("projects.title_project_pro_2"),
            contentSlide: t("projects.content_project_pro_2"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={as} alt={"corsica"} title={t("projects.title_project_pro_2")} content={t("projects.content_project_pro_2")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/yourlinkedinid" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="mailto:yourpersonalemail@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaGoogle className="social-icon" />
                        </a>
                        <a href="https://www.youruniversitywebsite.com" target="_blank" rel="noopener noreferrer">
                            <FaGraduationCap className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 3,
            img: mm,
            titleSlide: t("projects.title_project_pro_3"),
            contentSlide: t("projects.content_project_pro_3"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={mm} alt={"madewis"} title={t("projects.title_project_pro_3")} content={t("projects.content_project_pro_3")} />
                    <div className="social-icons">
                        <a href="https://sites.google.com/view/marysstack/" target="_blank" rel="noopener noreferrer">
                            <FaGoogle className="social-icon" />
                        </a>
                        <a href="https://scholar.google.co.in/citations?user=L40HgZYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                            <FaGraduationCap className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 4,
            img: aw,
            titleSlide: t("projects.title_project_pro_4"),
            contentSlide: t("projects.content_project_pro_4"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={aw} alt={"hobbies"} title={t("projects.title_project_pro_4")} content={t("projects.content_project_pro_4")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/apeksha-waghmare-27742090/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://scholar.google.com/citations?user=qZVmZl0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                            <FaGraduationCap className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
    ];

    return (
        <>
            <motion.div ref={ref} animate={inView ? "show" : "hidden"} initial="hidden" variants={textVariant(0.2)} className="projects-title">
                {t("projects.title_pro")}
                <p>{t("projects.subtitle_pro")}</p>
            </motion.div>
            <motion.div ref={ref} animate={inView ? "show" : "hidden"} initial="hidden" variants={fadeIn("top", "tween", 0.2, 1)} className="container-caroussel">
                <div className="container-arrow-icon">
                    <div className={isMobile ? "arrow-icon-hover-mobile" : "arrow-icon-hover"} onClick={() => {
                        if (!menuOpened) {
                            setState({
                                goToSlide: currentIndex - 1, offsetRadius: 1,
                                showNavigation: false,
                                enableSwipe: true,
                                config: config.gentle
                            });
                            setCurrentIndex(currentIndex - 1);
                        }
                    }}>
                        <IoIosArrowBack className="arrow-icon" />
                    </div>
                </div>
                <div className="container-slides">
                    <Carousel
                        slides={slides}
                        goToSlide={state.goToSlide}
                        offsetRadius={state.offsetRadius}
                        showNavigation={state.showNavigation}
                        enableSwipe={state.enableSwipe}
                        animationConfig={state.config}
                    />
                </div>
                <div className="container-arrow-icon">
                    <div className={isMobile ? "arrow-icon-hover-mobile" : "arrow-icon-hover"} onClick={() => {
                        if (!menuOpened) {
                            setState({
                                goToSlide: currentIndex + 1, offsetRadius: 1,
                                showNavigation: false,
                                enableSwipe: true,
                                config: config.gentle
                            });
                            setCurrentIndex(currentIndex + 1);
                        }
                    }}>
                        <IoIosArrowForward className="arrow-icon" />
                    </div>
                </div>
            </motion.div>

            {selectedProject && (
                <motion.div className="overlay-animated-item-project"
                    layoutId={"backgroundProject"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                </motion.div>
            )}
        </>
    );
};


const PrivateProjects = ({ menuOpened, t, threshold }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: threshold
    });

    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 1,
        showNavigation: false,
        enableSwipe: true,
        config: config.gentle
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject] = useState(null);

    useEffect(() => {
        const setOverflowBody = () => {
            if (selectedProject === null) {
                document.body.style.overflowY = "auto";
            } else {
                document.body.style.overflowY = "hidden";
            }
        }

        setOverflowBody();
    }, [selectedProject]);

    const slides = [
        {
            key: 1,
            img: kishan,
            titleSlide: t("projects.title_project_perso_1"),
            contentSlide: t("projects.content_project_perso_1"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={kishan} alt={"gemu"} title={t("projects.title_project_perso_1")} content={t("projects.content_project_perso_1")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/kishan-singh-a8b12a319/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/kxshan.26?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 2,
            img: nikita,
            titleSlide: t("projects.title_project_perso_2"),
            contentSlide: t("projects.content_project_perso_2"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={nikita} alt={"myyoukounkoun"} title={t("projects.title_project_perso_2")} content={t("projects.content_project_perso_2")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/yourlinkedinid" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/nikitasonar21?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 3,
            img: kaamini,
            titleSlide: t("projects.title_project_perso_3"),
            contentSlide: t("projects.content_project_perso_3"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={kaamini} alt={"portfolio"} title={t("projects.title_project_perso_3")} content={t("projects.content_project_perso_3")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/kamini-prasad-931942313" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/_kaaminii_p19?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
         {
            key: 4,
            img: neel,
            titleSlide: t("projects.title_project_perso_4"),
            contentSlide: t("projects.content_project_perso_4"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={neel} alt={"botdiscord"} title={t("projects.title_project_perso_4")} content={t("projects.content_project_perso_4")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/neel-jain-202029260/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/neel_jain__?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 5,
            img: dhruv,
            titleSlide: t("projects.title_project_perso_5"),
            contentSlide: t("projects.content_project_perso_5"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={dhruv} alt={"botdiscord"} title={t("projects.title_project_perso_5")} content={t("projects.content_project_perso_5")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/dhruv-paste-2541a9191" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/dhruvpaste_20?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 6,
            img: pranay,
            titleSlide: t("projects.title_project_perso_6"),
            contentSlide: t("projects.content_project_perso_6"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={pranay} alt={"botdiscord"} title={t("projects.title_project_perso_6")} content={t("projects.content_project_perso_6")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/yourlinkedinid" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/pranay_jaiswal123?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 7,
            img: revati,
            titleSlide: t("projects.title_project_perso_7"),
            contentSlide: t("projects.content_project_perso_7"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={revati} alt={"botdiscord"} title={t("projects.title_project_perso_7")} content={t("projects.content_project_perso_7")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/revati-kirdat-83701223b/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/_revatiiiiiiiiii_?igsh=MWVpMnk5emo2ZG9zNQ%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 8,
            img: sagar,
            titleSlide: t("projects.title_project_perso_8"),
            contentSlide: t("projects.content_project_perso_8"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={sagar} alt={"botdiscord"} title={t("projects.title_project_perso_8")} content={t("projects.content_project_perso_8")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/yourlinkedinid" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/_sagar._06?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 9,
            img: krish,
            titleSlide: t("projects.title_project_perso_9"),
            contentSlide: t("projects.content_project_perso_9"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={krish} alt={"botdiscord"} title={t("projects.title_project_perso_9")} content={t("projects.content_project_perso_9")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/krish-tiwari-64889228a/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/krishtiwari30?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
        {
            key: 10,
            img: harsh,
            titleSlide: t("projects.title_project_perso_10"),
            contentSlide: t("projects.content_project_perso_10"),
            content: (
                <div>
                    <Slide isMobile={isMobile} img={harsh} alt={"botdiscord"} title={t("projects.title_project_perso_10")} content={t("projects.content_project_perso_10")} />
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/harsh-gupta-795896303/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/harshhhh._._._.7?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="social-icon" />
                        </a>
                    </div>
                </div>
            )
        },
    ];

    return (
        <>
            <motion.div ref={ref} animate={inView ? "show" : "hidden"} initial="hidden" variants={textVariant(0.2)} className="projects-title">
                {t("projects.title_private")}
                <p>{t("projects.subtitle_private")}</p>
            </motion.div>
            <motion.div ref={ref} animate={inView ? "show" : "hidden"} initial="hidden" variants={fadeIn("bottom", "tween", 0.2, 1)} className="container-caroussel">
                <div className="container-arrow-icon">
                    <div className={isMobile ? "arrow-icon-hover-mobile" : "arrow-icon-hover"} onClick={() => {
                        if (!menuOpened) {
                            setState({
                                goToSlide: currentIndex - 1,
                                offsetRadius: 1,
                                showNavigation: false,
                                enableSwipe: true,
                                config: config.gentle
                            });
                            setCurrentIndex(currentIndex - 1);
                        }
                    }}>
                        <IoIosArrowBack className="arrow-icon" />
                    </div>
                </div>
                <div className="container-slides">
                    <Carousel
                        slides={slides}
                        goToSlide={state.goToSlide}
                        offsetRadius={state.offsetRadius}
                        showNavigation={state.showNavigation}
                        enableSwipe={state.enableSwipe}
                        animationConfig={state.config}
                    />
                </div>
                <div className="container-arrow-icon">
                    <div className={isMobile ? "arrow-icon-hover-mobile" : "arrow-icon-hover"} onClick={() => {
                        if (!menuOpened) {
                            setState({
                                goToSlide: currentIndex + 1,
                                offsetRadius: 1,
                                showNavigation: false,
                                enableSwipe: true,
                                config: config.gentle
                            });
                            setCurrentIndex(currentIndex + 1);
                        }
                    }}>
                        <IoIosArrowForward className="arrow-icon" />
                    </div>
                </div>
            </motion.div>

            {selectedProject && (
                <motion.div className="overlay-animated-item-project"
                    layoutId={"backgroundProject"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                </motion.div>
            )}
        </>
    );
};

const Team = ({ menuOpened, threshold }) => {
    const { t } = useTranslation();

    return (
        <div className="projects">
            <div className="projects-content-pro">
                <ProProjects menuOpened={menuOpened} t={t} threshold={threshold} />
            </div>
            <div className="projects-content-perso">
                <PrivateProjects menuOpened={menuOpened} t={t} threshold={threshold} />
            </div>
        </div>
    );
}


export default Team;