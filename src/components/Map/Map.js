import React from "react"
import * as styles from "./_Map.module.scss"


const Map = () => {

    return (
        <section id="kontakty" className={styles.section}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9292878159313!2d14.377712575755835!3d50.068885914764955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95aed8e447fb%3A0x8da27e0227b3f5f4!2sVrchlick%C3%A9ho%2027%2C%20150%2000%20Praha%205!5e0!3m2!1sen!2scz!4v1702675532103!5m2!1sen!2scz" style={{border:0, height: "600px", width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )

}

export default Map