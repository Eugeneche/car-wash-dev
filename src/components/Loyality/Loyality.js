import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_Loyality.module.scss"
import wash_icon from "../../images/wash_icon.png"
import wash_icon_gratis from "../../images/wash_icon_gratis.png"
//import { Link } from "gatsby"
//import LocalizedLink from "../localizedLink"

const Loyality = () => {

    const { 
        loyalty,
        loyalty_note,
        loyalty_opys,
        loyalty_umova,
        loyalty_bonus
     } = useTranslations()

    return (
        <section id="bonusove-programy" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.loyalityTitle}>{loyalty}</h2>
                <p className={styles.loyalityNote}>{loyalty_note}</p>
 
                <div className={styles.loyalityGraphics}>
                    <img className={styles.regularWashing} src={wash_icon} alt="washing car icon"></img>
                    <span className={styles.multiply}>x 5 =</span>
                    <div className={styles.bonus}>
                        <p className={styles.conditions}>{loyalty_umova}</p>
                        <img src={wash_icon_gratis} alt="washing car icon"></img>
                        <p className={styles.subject}>{loyalty_bonus}</p>
                    </div>                   
                </div>  

                <p className={styles.loyalityInfo}>{loyalty_opys}</p>    
            </div>
        </section>
    )

}

export default Loyality