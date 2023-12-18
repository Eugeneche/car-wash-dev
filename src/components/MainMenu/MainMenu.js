import React from "react"
import useTranslations from "../useTranslations"
import LanguagesSwitcher from "./LanguagesSwitcher"
import NavLink from "./NavLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as style from "./_MainMenu.module.scss"
import logo from "../../images/logo.jpg"

const MainMenu = ({locale}) => {

    const { 
            o_nas,
            programs,
            loyalty,
            gifts,
            contacts
            } = useTranslations()

  return (
    <nav className={style.mainMenu}>
      <div className={style.container}>
        <div className={style.pages}>
            <NavLink to="/"><img className={style.logo} src={logo} alt="Alfa Wash logo"></img></NavLink>
            <AnchorLink to={locale === `cs` ? `/#o-nas` : `/${locale}/#o-nas`}>{o_nas}</AnchorLink>
            <AnchorLink to={locale === `cs` ? `/#programy-myti` : `/${locale}/#programy-myti`}>{programs}</AnchorLink>
            <AnchorLink to={locale === `cs` ? `/#bonusove-programy` : `/${locale}/#bonusove-programy`}>{loyalty}</AnchorLink>
            <AnchorLink to={locale === `cs` ? `/#darkove-poukazy` : `/${locale}/#darkove-poukazy`}>{gifts}</AnchorLink>
            <AnchorLink to={locale === `cs` ? `/#kontakty` : `/${locale}/#kontakty`}>{contacts}</AnchorLink>
            {/* <NavLink to="/contacts">{contacts}</NavLink> */}
        </div>

        <LanguagesSwitcher />
      </div>
    </nav>
  )
}

export default MainMenu