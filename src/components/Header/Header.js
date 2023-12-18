import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import Carousel from "nuka-carousel"
import * as styles from "./_Header.module.scss"
import "./Header.scss"
import left from "../../images/arrow-chevron-left.svg"
import right from "../../images/arrow-chevron-right.svg"


const Header = () => {

    const { 
        slider_zagolovok_1,
        slider_pidzagolovok_1,
        slider_zagolovok_2,
        slider_pidzagolovok_2,
        slider_zagolovok_3, 
        slider_pidzagolovok_3
     } = useTranslations()

    return (
        <section className={styles.section}>
            <Carousel
                autoplay={true}
                autoplayInterval={4000}
                wrapAround={true}
                pauseOnHover={false}
                defaultControlsConfig={{
                    nextButtonStyle: {display: "none"},
                    prevButtonStyle: {display: "none"},
                    pagingDotsClassName: "dot",
                    pagingDotsContainerClassName: "dots"
                }}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}><img className={styles.arrowLeft} src={left}></img></button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}><img className={styles.arrowRight} src={right}></img></button>
                  )}
            >
                <div className={styles.sliderWrapper}>
                    <StaticImage src="../../images/slider_1.jpg" alt="car body waxing" />
                    <div className={styles.container}>
                        <h2 className={styles.sliderTitleLeft}>{slider_zagolovok_1}</h2>
                        <h3 className={styles.sliderSubtitleLeft}>{slider_pidzagolovok_1}</h3>
                    </div>
                </div>
                <div className={styles.sliderWrapper}>
                    <StaticImage src="../../images/slider_2.jpg" alt="car exterior and interior cleaning" />
                    <div className={styles.container}>
                        <h2 className={styles.sliderTitleLeft}>{slider_zagolovok_2}</h2>
                        <h3 className={styles.sliderSubtitleLeft}>{slider_pidzagolovok_1}</h3>
                    </div>
                </div>
                <div className={styles.sliderWrapper}>
                    <StaticImage src="../../images/slider_3.jpg" alt="car interior cleaning" />
                    <div className={styles.container}>
                        <h2 className={styles.sliderTitleRight}>{slider_zagolovok_3}</h2>
                        <h3 className={styles.sliderSubtitleRight}>{slider_pidzagolovok_3}</h3>
                    </div>
                </div>
            </Carousel>
        </section>
    )

}

export default Header