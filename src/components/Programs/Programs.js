import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_Programs.module.scss"
//import { Link } from "gatsby"
//import LocalizedLink from "../localizedLink"

const Programs = () => {

    const { 
        programy_myti,
        nabidky,
        nabidka_1,
        nabidka_2,
        program_1,
        program_1_nazva,
        program_1_1,
        program_1_2,
        program_1_3,
        program_1_4,
        program_1_5,
        program_1_6,
        program_1_7,
        program_1_8,
        program_1_9,
        program_1_10,
        program_1_11,
        program_1_12,
        program_1_price_osobak,
        program_1_price_suv,
        program_2,
        program_2_nazva,
        program_2_1,
        program_2_2,
        program_2_3,
        program_2_4,
        program_2_5,
        program_2_6,
        program_2_7,
        program_2_8,
        program_2_9,
        program_2_10,
        program_2_11,
        program_2_12,
        program_2_price_osobak,
        program_2_price_suv,
        program_3,
        program_3_nazva,
        program_3_1,
        program_3_2,
        program_3_3,
        program_3_4,
        program_3_5,
        program_3_6,
        program_3_7,
        program_3_8,
        program_3_9,
        program_3_10,
        program_3_11,
        program_3_12,
        program_3_price_osobak,
        program_3_price_suv,
        program_4,
        program_4_nazva,
        program_4_1,
        program_4_2,
        program_4_3,
        program_4_4,
        program_4_5,
        program_4_6,
        program_4_7,
        program_4_8,
        program_4_9,
        program_4_10,
        program_4_11,
        program_4_12,
        program_4_price_osobak,
        program_4_price_suv,
        program_5,
        program_5_nazva,
        program_5_1,
        program_5_2,
        program_5_3,
        program_5_4,
        program_5_5,
        program_5_6,
        program_5_7,
        program_5_8,
        program_5_9,
        program_5_10,
        program_5_11,
        program_5_12,
        program_5_price_osobak,
        program_5_price_suv,
        program_6,
        program_6_nazva,
        program_6_1,
        program_6_2,
        program_6_3,
        program_6_4,
        program_6_5,
        program_6_6,
        program_6_7,
        program_6_8,
        program_6_9,
        program_6_10,
        program_6_11,
        program_6_12,
        program_6_price_osobak,
        program_6_price_suv,
        osobni,
        suv
    } = useTranslations()

    const prg1 = [program_1_1, program_1_2, program_1_3, program_1_4, program_1_5, program_1_6, program_1_7, program_1_8, program_1_9, program_1_10, program_1_11, program_1_12].filter(el => el)
    const prg2 = [program_2_1, program_2_2, program_2_3, program_2_4, program_2_5, program_2_6, program_2_7, program_2_8, program_2_9, program_2_10, program_2_11, program_2_12].filter(el => el)
    const prg3 = [program_3_1, program_3_2, program_3_3, program_3_4, program_3_5, program_3_6, program_3_7, program_3_8, program_3_9, program_3_10, program_3_11, program_3_12].filter(el => el)
    const prg4 = [program_4_1, program_4_2, program_4_3, program_4_4, program_4_5, program_4_6, program_4_7, program_4_8, program_4_9, program_4_10, program_4_11, program_4_12].filter(el => el)
    const prg5 = [program_5_1, program_5_2, program_5_3, program_5_4, program_5_5, program_5_6, program_5_7, program_5_8, program_5_9, program_5_10, program_5_11, program_5_12,].filter(el => el)
    const prg6 = [program_6_1, program_6_2, program_6_3, program_6_4, program_6_5, program_6_6, program_6_7, program_6_8, program_6_9, program_6_10, program_6_11, program_6_12,].filter(el => el)

    return (
        <section id="programy-myti" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.programsTitle}>{programy_myti}</h2>

                <div className={styles.proposals}>
                    <h3 className={styles.proposalsTitle}>{nabidky}</h3>
                    <p className={styles.proposalItem}><span className={styles.proposalMarker}>&#8226;</span>{nabidka_1}</p>
                    <p className={styles.proposalItem}><span className={styles.proposalMarker}>&#8226;</span>{nabidka_2}</p>
                </div>

                <div className={styles.programs}>
                    <div className={styles.programItem}>
                        <h4 className={styles.programNum}>{program_1}</h4>
                        <h3 className={styles.programName}>{program_1_nazva}</h3>
                        <ul className={styles.servicesList}>
                            {prg1.map(el => {
                                return (
                                    <li key={el} className={styles.serviceItem}>
                                        <span>&#8226;</span><span>{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${osobni}: `}</span>{`${program_1_price_osobak},- Kč`}</h3>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${suv}: `}</span>{`${program_1_price_suv},- Kč`}</h3>
                    </div>
                    <div className={styles.programItem}>
                        <h4 className={styles.programNum}>{program_2}</h4>
                        <h3 className={styles.programName}>{program_2_nazva}</h3>
                        <ul className={styles.servicesList}>
                            {prg2.map(el => {
                                return (
                                    <li key={el} className={styles.serviceItem}>
                                        <span>&#8226;</span><span>{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${osobni}: `}</span>{`${program_2_price_osobak},- Kč`}</h3>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${suv}: `}</span>{`${program_2_price_suv},- Kč`}</h3>
                    </div>
                    <div className={styles.programItem}>
                        <h4 className={styles.programNum}>{program_3}</h4>
                        <h3 className={styles.programName}>{program_3_nazva}</h3>
                        <ul className={styles.servicesList}>
                            {prg3.map(el => {
                                return (
                                    <li key={el} className={styles.serviceItem}>
                                        <span>&#8226;</span><span>{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${osobni}: `}</span>{`${program_3_price_osobak},- Kč`}</h3>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${suv}: `}</span>{`${program_3_price_suv},- Kč`}</h3>
                    </div>
                    <div className={styles.programItem}>
                        <h4 className={styles.programNum}>{program_4}</h4>
                        <h3 className={styles.programName}>{program_4_nazva}</h3>
                        <ul className={styles.servicesList}>
                            {prg4.map(el => {
                                return (
                                    <li key={el} className={styles.serviceItem}>
                                        <span>&#8226;</span><span>{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${osobni}: `}</span>{`${program_4_price_osobak},- Kč`}</h3>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${suv}: `}</span>{`${program_4_price_suv},- Kč`}</h3>
                    </div>
                    <div className={styles.programItem}>
                        <h4 className={styles.programNum}>{program_5}</h4>
                        <h3 className={styles.programName}>{program_5_nazva}</h3>
                        <ul className={styles.servicesList}>
                            {prg5.map(el => {
                                return (
                                    <li key={el} className={styles.serviceItem}>
                                        <span>&#8226;</span><span>{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${osobni}: `}</span>{`${program_5_price_osobak},- Kč`}</h3>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${suv}: `}</span>{`${program_5_price_suv},- Kč`}</h3>
                    </div>
                    <div className={styles.programItem}>
                        <h4 className={styles.programNum}>{program_6}</h4>
                        <h3 className={styles.programName}>{program_6_nazva}</h3>
                        <ul className={styles.servicesList}>
                            {prg6.map(el => {
                                return (
                                    <li key={el} className={styles.serviceItem}>
                                        <span>&#8226;</span><span>{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${osobni}: `}</span>{`${program_6_price_osobak},- Kč`}</h3>
                        <h3 className={styles.price}><span className={styles.carBody}>{`${suv}: `}</span>{`${program_6_price_suv},- Kč`}</h3>
                    </div>

                </div>     
            </div>
        </section>
    )

}

export default Programs