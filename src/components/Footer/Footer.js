import React from "react"
import * as styles from "./_Footer.module.scss"
import insta from "../../images/insta.svg"
import phone from "../../images/phone.svg"
import location from "../../images/location.svg"
import logo from "../../images/logo.jpg"
import envelope from "../../images/envelope.svg"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}><img src={logo} alt="Alfa Wash logo"></img>© 2023 - {new Date().getFullYear()} Alfa Wash</div>
                <div className={styles.contacts}>
                    <div><img src={phone} alt="phone icon"></img><a href="tel:+420775555157">+420 775 555 157</a></div>
                    <div><img src={envelope} alt="envelope icon"></img><a href="mailto:Alfawash@seznam.cz">Alfawash@seznam.cz</a></div>
                </div>
                <div className={styles.contact}><img src={location} alt="location icon"></img>Vrchlického 27, 150 00 Praha 5</div>
                <div><a href="https://www.instagram.com/alfa_wash_luxusni_myti_aut/" target="_blank" rel="noopener noreferrer"><img className={styles.insta} src={insta} alt="instagram logo"></img></a></div>

            </div>
            <p style={{fontSize: "12px", color: "#8f8f8f", textAlign: "center", margin: "0 0 6px"}}>Developed by
          <a href="https://websolutionsforyou.com/" target="_blank"> websolutionsforyou.com</a></p>
        </footer>
    )

}

export default Footer