import * as React from "react"
import Seo from "../components/seo"
import About from "../components/About/About"
import Map from "../components/Map/Map"
import Header from "../components/Header/Header"
import Programs from "../components/Programs/Programs"
import Loyality from "../components/Loyality/Loyality"
import Gallery from "../components/Gallery/Gallery"
import Gifts from "../components/Gifts/Gifts"
import Additions from "../components/Additions/Additions"
import { LocaleContext } from "../components/layout"



const IndexPage = () => {

  

  return (
    <>
      
      <Header />
      <Loyality />
      <About />
      <Programs />
      
      <Gifts />
      <Additions />
      <Gallery />
      <Map />
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data, pageContext: { locale } }) => {

  return (
    <Seo 
      title={locale === "cs" ? `Ruční mytí aut v Praze Alfa Wash. Kompletní mytí zvenku a čištění uvnitř vozu` : `Ручна мийка авто в Празі Alfa Wash. Повне миття зовні та очищення всередині автомобіля`}
      description={locale === "cs" ? `Alfa Wash - ruční mytí aut v Praze. Čištění interiéru: renovace čalounění, plastů, chromu. Mytí karoserie nejlepší autokosmetikou. Zdarma Náhradní vůz a služba Pick up` : `Alfa Wash - ручне миття авто в Празі. Очищення салону: відновлення обивки, пластику, хрому. Миття кузову найкращою автокосметикою. Безкоштовні Авто на заміну та Pick up сервіс`} />
  )
}

export default IndexPage
