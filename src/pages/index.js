import * as React from "react"
import Seo from "../components/seo"
import About from "../components/About/About"
import Map from "../components/Map/Map"
import Header from "../components/Header/Header"
import Programs from "../components/Programs/Programs"
import Loyality from "../components/Loyality/Loyality"



const IndexPage = () => {

  return (
    <>
      
      <Header />
      <About />
      <Programs />
      <Loyality />
      <Map />
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
