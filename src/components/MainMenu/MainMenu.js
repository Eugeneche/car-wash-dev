import React, { useState } from "react"
import useTranslations from "../useTranslations"
import LanguagesSwitcher from "./LanguagesSwitcher"
import NavLink from "./NavLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as style from "./_MainMenu.module.scss"
import logo from "../../images/logo.jpg"
import hamburgerStroke from "../../images/menu_stroke.svg"
import close from "../../images/close.svg"

const MainMenu = ({locale}) => {

  const [ isShow, setIsShow ] = useState(false)

  const { 
          o_nas,
          programs,
          loyalty,
          gifts,
          additions,
          gallery,
          contacts
        } = useTranslations()

  const styleBcShow = {
    left: "10%",
    /* height: "90vh", */
    bottom: "5%",
    right: "10%",
    padding: "6vh 0",
    transition: "all ease 0.5s"
  }

  const styleBcHide = {
    left: "-10%",
    right: "100%",
    bottom: "95%",
    padding: "0",
    /* height: "0vh", */
    transition: "all ease 0.3s",
    /* transition: "bottom ease 1s" */
  }

  return (
    <>
      <nav className={style.mainMenu}>
        <div className={style.container}>
          <div className={style.pages}>
              <NavLink to="/"><img className={style.logo} src={logo} alt="Alfa Wash logo"></img></NavLink>
              <AnchorLink to={locale === `cs` ? `/#o-nas` : `/${locale}/#o-nas`}>{o_nas}</AnchorLink>
              <AnchorLink to={locale === `cs` ? `/#programy-myti` : `/${locale}/#programy-myti`}>{programs}</AnchorLink>
              <AnchorLink to={locale === `cs` ? `/#bonusove-programy` : `/${locale}/#bonusove-programy`}>{loyalty}</AnchorLink>
              <AnchorLink to={locale === `cs` ? `/#darkove-poukazy` : `/${locale}/#darkove-poukazy`}>{gifts}</AnchorLink>
              <AnchorLink to={locale === `cs` ? `/#doplnkove-sluzby` : `/${locale}/#doplnkove-sluzby`}>{additions}</AnchorLink>
              <AnchorLink to={locale === `cs` ? `/#gallery` : `/${locale}/#gallery`}>{gallery}</AnchorLink>
              <AnchorLink to={locale === `cs` ? `/#kontakty` : `/${locale}/#kontakty`}>{contacts}</AnchorLink>
              {/* <NavLink to="/contacts">{contacts}</NavLink> */}
          </div>

          <LanguagesSwitcher />
        </div>
      </nav>

      <nav className={style.mobileMenu}>
        <NavLink to="/"><img className={style.logoMobile} src={logo} alt="logo"></img></NavLink>
        <LanguagesSwitcher />
        <button onClick={() => setIsShow(true)}><img className={style.hamburger} src={hamburgerStroke} alt="hamburger menu icon"></img></button>
      </nav>

      <div className={style.mobileMenuShadow} style={isShow ? {display: "block"} : {display: "none"}}>        
      </div>

      <nav className={style.mobileMenuBackground} style={isShow ? styleBcShow : styleBcHide}>
        <button onClick={() => setIsShow(false)}>
          <img className={style.close} src={close} alt="close menu icon"></img>
        </button>
        <NavLink className={style.logo} to="/"><img onClick={() => setIsShow(false)} className={style.logo} src={logo} alt="Alfa Wash logo"></img></NavLink>
{/*         <Link onClick={() => setIsShow(false)} className={style.logo} to="/"><img src={logo} alt="logo"></img></Link> */}
        <div className={style.items}>


          <button className={style.item} onClick={() => setIsShow(false)}>
            <AnchorLink to={locale === `cs` ? `/#o-nas` : `/${locale}/#o-nas`}>{o_nas}</AnchorLink>
          </button>
          <button className={style.item} onClick={() => setIsShow(false)}>
            <AnchorLink to={locale === `cs` ? `/#programy-myti` : `/${locale}/#programy-myti`}>{programs}</AnchorLink>
          </button>
          <button className={style.item} onClick={() => setIsShow(false)}>
            <AnchorLink to={locale === `cs` ? `/#bonusove-programy` : `/${locale}/#bonusove-programy`}>{loyalty}</AnchorLink>
          </button>
          <button className={style.item} onClick={() => setIsShow(false)}>
            <AnchorLink to={locale === `cs` ? `/#darkove-poukazy` : `/${locale}/#darkove-poukazy`}>{gifts}</AnchorLink>
          </button>
          <button className={style.item} onClick={() => setIsShow(false)}>
          <AnchorLink to={locale === `cs` ? `/#doplnkove-sluzby` : `/${locale}/#doplnkove-sluzby`}>{additions}</AnchorLink>
          </button>
          <button className={style.item} onClick={() => setIsShow(false)}>
            <AnchorLink to={locale === `cs` ? `/#gallery` : `/${locale}/#gallery`}>{gallery}</AnchorLink>
          </button>
          <button className={style.item} onClick={() => setIsShow(false)}>
            <AnchorLink to={locale === `cs` ? `/#kontakty` : `/${locale}/#kontakty`}>{contacts}</AnchorLink>
          </button>
        </div>   
    
      </nav>
    </>
  )
}

export default MainMenu