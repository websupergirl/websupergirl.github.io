import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {

  const experienceData = useStaticQuery(graphql`
  query ExperienceQuery {
    allExperienceJson {
      nodes {
        anchor
        experience {
          title
          company
          startDate
          endDate
        }
      }
    }
  }
`)

return (
  <section id={experienceData.allExperienceJson.nodes[0].anchor}>
    <div className="container">
    <h3>Experience</h3>
    <ul>
    {experienceData.allExperienceJson.nodes[0].experience.map(node => (
      <li key={node.title}>
          {node.title}, {node.company}<br />{node.startDate} - {node.endDate}
      </li>
    ))}
    </ul>
    </div>
  </section>
)

}

export default Experience
