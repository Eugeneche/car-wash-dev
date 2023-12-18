import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "./layout"

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext)

  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData?.nodes?.map(item => {
    return {
      name: item?.name,
      translations: item?.childTranslationsJson,
    }
  })

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0]
  //console.log(translations)
  return translations
}

export default useTranslations

const query = graphql`
query useTranslations {
  rawData: allFile(filter: {sourceInstanceName: {eq: "translations"}}) {
    nodes {
      childTranslationsJson {
        home
        o_nas
        programs
        loyalty
        gifts
        contacts  
        slider_zagolovok_1
        slider_pidzagolovok_1
        slider_zagolovok_2
        slider_pidzagolovok_2
        slider_zagolovok_3   
        slider_pidzagolovok_3  
        opys_zagolovok
        opys_abzac_1
        opys_abzac_2
        o_nas
        programy_myti
        program_1
        program_1_nazva
        program_1_1
        program_1_2
        program_1_3
        program_1_4
        program_1_5
        program_1_6
        program_1_7
        program_1_8
        program_1_9
        program_1_10
        program_1_11
        program_1_12
        program_1_price_osobak
        program_1_price_suv
        program_2
        program_2_nazva
        program_2_1
        program_2_2
        program_2_3
        program_2_4
        program_2_5
        program_2_6
        program_2_7
        program_2_8
        program_2_9
        program_2_10
        program_2_11
        program_2_12
        program_2_price_osobak
        program_2_price_suv
        program_3
        program_3_nazva
        program_3_1
        program_3_2
        program_3_3
        program_3_4
        program_3_5
        program_3_6
        program_3_7
        program_3_8
        program_3_9
        program_3_10
        program_3_11
        program_3_12
        program_3_price_osobak
        program_3_price_suv
        program_4
        program_4_nazva
        program_4_1
        program_4_2
        program_4_3
        program_4_4
        program_4_5
        program_4_6
        program_4_7
        program_4_8
        program_4_9
        program_4_10
        program_4_11
        program_4_12
        program_4_price_osobak
        program_4_price_suv
        program_5
        program_5_nazva
        program_5_1
        program_5_2
        program_5_3
        program_5_4
        program_5_5
        program_5_6
        program_5_7
        program_5_8
        program_5_9
        program_5_10
        program_5_11
        program_5_12
        program_5_price_osobak
        program_5_price_suv
        program_6
        program_6_nazva
        program_6_1
        program_6_2
        program_6_3
        program_6_4
        program_6_5
        program_6_6
        program_6_7
        program_6_8
        program_6_9
        program_6_10
        program_6_11
        program_6_12
        program_6_price_osobak
        program_6_price_suv
        osobni
        suv
        loyalty_opys
        loyalty_umova
        loyalty_bonus
      }
      name
    }
  }
}
`
