import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Education = () => {

  const educationData = useStaticQuery(graphql`
  query EducationQuery {
    allEducationJson {
      nodes {
        anchor
        education {
          school
          degree
          attendanceYears
        }
      }
    }
  }
`)

return (
  <section id={educationData.allEducationJson.nodes[0].anchor}>
    <div className="container">
    <h3>Education</h3>
    <ul>
    {educationData.allEducationJson.nodes[0].education.map(node => (
      <li key={node.school}>
          {node.school} ({node.attendanceYears})<br />
          {node.degree}
      </li>
    ))}
    </ul>
    </div>
  </section>
)

}

export default Education
