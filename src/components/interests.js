import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Interests = () => {
  const interestsData = useStaticQuery(graphql`
    query InterestsQuery {
      allInterestsJson {
        nodes {
          anchor
          interests {
            text
          }
        }
      }
    }
  `)

  return (
    <section id={interestsData.allInterestsJson.nodes[0].anchor}>
      <div class="container">
        <h3>Interests</h3>
        <p>{interestsData.allInterestsJson.nodes[0].interests[0].text}</p>
      </div>
    </section>
  )
}

export default Interests
