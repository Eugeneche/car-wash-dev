import * as React from "react"
//import { Layout } from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About/About"
import Map from "../components/Map/Map"



const IndexPage = () => {

  return (
    <>
      <h1>Template</h1>

      <About />
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
