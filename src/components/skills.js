import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {

  const skillsData = useStaticQuery(graphql`
  query SkillsQuery {
    allSkillsJson {
      nodes {
        anchor
        skills {
          stack
        }
      }
    }
  }
`)

return (
  <section id={skillsData.allSkillsJson.nodes[0].anchor}>
    <div className="container">
    <h3>Skills</h3>
    <ul className="feature-icons">
    {skillsData.allSkillsJson.nodes[0].skills.map(node => (
      <li key={node.stack}>
          <FontAwesomeIcon icon={("fas", "star")} color="#64a2d0" /> {node.stack}
      </li>
    ))}
    </ul>
    </div>
  </section>
)

}

export default Skills
