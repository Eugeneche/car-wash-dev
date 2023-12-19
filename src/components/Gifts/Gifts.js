import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_Gifts.module.scss"


const Gifts = () => {

    const { 
        gifts
        } = useTranslations()


    return (
        <section id="darkove-poukazy" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.giftsTitle}>{gifts}</h2>
                <div className={styles.giftsWrapper}>

                    <StaticImage
                        style={{
                            transform: "rotate(-15deg)",
                            position: "relative",
                            left: "5vw"
                        }}
                        src="../../images/gift_1000.jpg" alt="gift card 1000" />
                    <StaticImage
                        style={{
                            transform: "rotate(-11deg)",
                            position: "relative",
                            left: "0"
                        }}
                        src="../../images/gift_2000.jpg" alt="gift card 2000" />
                    <StaticImage 
                        style={{
                            transform: "rotate(-8deg)",
                            position: "relative",
                            right: "5vw"
                        }}
                        src="../../images/gift_3000.jpg" alt="gift card 3000" />

                </div>
            </div>
        </section>
    )

}

export default Gifts