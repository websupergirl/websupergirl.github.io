import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => {

  const introData = useStaticQuery(graphql`
    query IntroQuery {
      allIntroJson {
        nodes {
          anchor
          intro {
            name
            intro
            title
          }
        }
      }
    }
  `)

  return (
      <section id={introData.allIntroJson.nodes[0].anchor}>
        <div class="image main" data-position="center">
          <StaticImage
            src="../assets/images/banner.jpg"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="banner"
          />
        </div>
        <div class="container">
        <header class="major">
          <h2>{introData.allIntroJson.nodes[0].intro[0].name}</h2>
          <p>{introData.allIntroJson.nodes[0].intro[0].title}</p>
        </header>
        <p>{introData.allIntroJson.nodes[0].intro[0].intro}</p>
      </div>
      </section>
  )

}

export default Intro
