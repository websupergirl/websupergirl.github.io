import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Publications = () => {
  const publicationsData = useStaticQuery(graphql`
    query PublicationsQuery {
      allPublicationsJson {
        nodes {
          anchor
          publications {
            title
            description
            link
          }
        }
      }
    }
  `)

  return (
    <section id={publicationsData.allPublicationsJson.nodes[0].anchor}>
      <div class="container">
        <h3>Publications</h3>
        <ul>
          {publicationsData.allPublicationsJson.nodes[0].publications.map(
            node => (
              <li key={node.title}>
                <a href={node.link}>{node.title}</a>
                <br />
                {node.description}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  )
}

export default Publications
