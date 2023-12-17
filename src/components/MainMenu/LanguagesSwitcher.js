import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import * as style from "./_MainMenu.module.scss"
import { LocaleContext } from "../layout"

//import ukr from "../../images/ukr.svg"
//import eng from "../../images/eng.svg"
//import cze from "../../images/cze.svg"
//import LocalizedLink from "../localizedLink"
//import useTranslations from "../useTranslations"



const LanguagesSwitcher = () => {

  const [path, setPath] = useState('')
  const locale = React.useContext(LocaleContext)

  useEffect(() => {
    if (window.location.pathname.match(`/${locale.locale}/`)) {
      setPath(window.location.pathname.slice(3))
    } else { 
      setPath(window.location.pathname)
    }
  })

  
  return (
    <div className={style.langs}>
{/*       <Link to={`${path}`} hrefLang="en">
        <img className={style.flag} src={eng} alt="great britain flag"></img>
      </Link> */}
      <Link to={`${path}`} hrefLang="cs">
        <span className={style.lang} style={locale.locale === "cs" ? {fontWeight: "400", color: "#707070"} : {fontWeight: "600", color: "#e6e6e6"}}>CZ</span>
        {/* <img className={style.flag} src={cze} alt="czech flag"></img> */}
      </Link>
      <Link to={`/uk${path}`} hrefLang="uk">
        <span className={style.lang} style={locale.locale === "uk" ? {fontWeight: "400", color: "#707070"} : {fontWeight: "600", color: "#e6e6e6"}}>UA</span>
        {/* <img className={style.flag} src={ukr} alt="ukrainian flag"></img> */}
      </Link>
{/*       {` `}/{` `}
      <Link to={`/ru${path()}`} hrefLang="ru">
        Русский
      </Link> */}
    </div>
  )
}

export default LanguagesSwitcher