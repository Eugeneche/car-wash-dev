import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_Additions.module.scss"
//import { Link } from "gatsby"
//import LocalizedLink from "../localizedLink"

const Additions = () => {

    const { 
        additions,
        additions_1,
        additions_1_price,
        additions_2,
        additions_2_price,
        additions_3,
        additions_3_price,
        additions_4,
        additions_4_price,
        additions_5,
        additions_5_price,
        additions_6,
        additions_6_price,
        additions_7,
        additions_7_price,
        additions_8,
        additions_8_price,
        additions_9,
        additions_9_price,
        additions_10,
        additions_10_price,
        additions_11,
        additions_11_price,
        additions_12,
        additions_12_price,
        additions_13,
        additions_13_price,
        additions_14,
        additions_14_price,
        additions_suv,
        additions_suv_price,
        additions_velke,
        additions_velke_price,
        additions_note,
    } = useTranslations()

    const currentAdditions = [additions_1, additions_2, additions_3, additions_4, additions_5, additions_6, additions_7, additions_8, additions_9, additions_10, additions_11, additions_12, additions_13, additions_14].filter(el => el)
    const currentAdditionsPrices = [additions_1_price, additions_2_price, additions_3_price, additions_4_price, additions_5_price, additions_6_price, additions_7_price, additions_8_price, additions_9_price, additions_10_price, additions_11_price, additions_12_price, additions_13_price, additions_14_price].filter(el => el)

    return (
        <section id="doplnkove-sluzby" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.additionsTitle}>{additions}</h2>

                <ul className={styles.additionsList}>
                    {currentAdditions.map((service, i) => {
                        return (
                            <li className={styles.additionsItem}>
                                <span className={styles.additionsNumber}>{i + 1}</span>
                                <span className={styles.additionsName}>{service}</span>
                                <span className={styles.additionsPrice}>{`${currentAdditionsPrices[i]},-`}</span>
                            </li>
                        )
                    })}
                </ul>
                <ul className={styles.additionsOtherConditions}>
                    <li className={styles.additionsOtherConditionsItem}>
                        <span className={styles.additionsNumber}>&#42;</span>
                        <span className={styles.additionsName}>{additions_suv}</span>
                        <span className={styles.additionsPrice}>{additions_suv_price}</span>
                    </li>
                    <li className={styles.additionsOtherConditionsItem}>
                        <span className={styles.additionsNumber}>&#42;</span>
                        <span className={styles.additionsName}>{additions_velke}</span>
                        <span className={styles.additionsPrice}>{additions_velke_price}</span>
                    </li>
                </ul>
                <p className={styles.additionsNote}>{additions_note}</p>
            </div>
        </section>
    )

}

export default Additions