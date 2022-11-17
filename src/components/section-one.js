import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const One = () => {

  const intro = useStaticQuery(graphql`
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
  console.log({intro})

  return (
      <section id={intro.allIntroJson.nodes[0].anchor}>
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
          <h2>{intro.allIntroJson.nodes[0].intro[0].name}</h2>
          <p>{intro.allIntroJson.nodes[0].intro[0].title}</p>
        </header>
        <p>{intro.allIntroJson.nodes[0].intro[0].intro}</p>
      </div>
      </section>
  )

}

export default One
