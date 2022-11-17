import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Highlights = () => {

  const highlightsData = useStaticQuery(graphql`
  query HighlightsQuery {
    allHighlightsJson {
      nodes {
        anchor
        highlights {
          highlight
        }
      }
    }
  }
`)

return (
  <section id={highlightsData.allHighlightsJson.nodes[0].anchor}>
    <div class="container">
    <h3>Career Highlights</h3>
    <ul class="feature-icons">
    {highlightsData.allHighlightsJson.nodes[0].highlights.map(node => (
      <li key={node.highlight}>
          <FontAwesomeIcon icon={("fas", "star")} color="#64a2d0" /> {node.highlight}
      </li>
    ))}
    </ul>
    </div>
  </section>
)

}

export default Highlights
