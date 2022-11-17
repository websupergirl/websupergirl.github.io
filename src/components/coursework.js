import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Coursework = () => {

  const courseworkData = useStaticQuery(graphql`
  query CourseworkQuery {
    allCourseworkJson {
      nodes {
        anchor
        courses {
          course
        }
      }
    }
  }
`)

return (
  <section id={courseworkData.allCourseworkJson.nodes[0].anchor}>
    <div class="container">
    <h3>Coursework</h3>
    <ul class="feature-icons">
    {courseworkData.allCourseworkJson.nodes[0].courses.map(node => (
      <li key={node.course}>
          <FontAwesomeIcon icon={"fas", "star"} color="#64a2d0" /> {node.course}
      </li>
    ))}
    </ul>
    </div>
  </section>
)

}

export default Coursework
