import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Speaking = () => {

  const speakingData = useStaticQuery(graphql`
  query SpeakingQuery {
    allSpeakingJson {
      nodes {
        anchor
        speaking {
          title
          description
          year
        }
      }
    }
  }
`)

return (
  <section id={speakingData.allSpeakingJson.nodes[0].anchor}>
    <div class="container">
    <h3>Speaking Events</h3>
    <ul>
    {speakingData.allSpeakingJson.nodes[0].speaking.map(node => (
      <li key={node.title}>
          {node.title} ({node.year})<br />
          {node.description}
      </li>
    ))}
    </ul>
    </div>
  </section>
)

}

export default Speaking
