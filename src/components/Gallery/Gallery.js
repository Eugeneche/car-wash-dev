import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_Gallery.module.scss"

//import i from "../../images/gallery/1.jpg"

const Gallery = () => {

    const { 
        gallery
        } = useTranslations()

    const data = useStaticQuery(graphql`
    query getGallery {
        allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
          nodes {
            childImageSharp {
              gatsbyImageData
              id
            }
          }
        }
      }
    `)

    const images = data.allFile.nodes

    return (
        <section id="gallery" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.galleryTitle}>{gallery}</h2>
                <div className={styles.galleryWrapper}>
                
                    {images.map(img => {
                        return (
                            <GatsbyImage
                                key={img.childImageSharp.id}
                                image={img.childImageSharp.gatsbyImageData}
                                alt="car washing process"
                            />
                                                           
                            
                        )
                    })}
                </div>
            </div>
        </section>
    )

}

export default Gallery