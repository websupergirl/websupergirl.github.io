import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Community = () => {

  const communityData = useStaticQuery(graphql`
  query CommunityQuery {
    allCommunityJson {
      nodes {
        anchor
        community {
          title
          description
          year
        }
      }
    }
  }
`)

return (
  <section id={communityData.allCommunityJson.nodes[0].anchor}>
    <div className="container">
    <h3>Community Engagements</h3>
    <ul>
    {communityData.allCommunityJson.nodes[0].community.map(node => (
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

export default Community
