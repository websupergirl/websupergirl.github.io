import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = () => {
  const sidebarData = useStaticQuery(graphql`
    query SidebarQuery {
      allSidebarJson {
        nodes {
          credits {
            link
            text
          }
          header {
            email
            location
            logoAlt
            logoImg
            phone
            pronouns
            sidebarName
            sidebarTitle
          }
          sidebar {
            anchor
            text
          }
          socials {
            icon
            prefix
            link
          }
        }
      }
    }
  `)

  return (
    <section id="sidebar">
      <header>
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">
          {sidebarData.allSidebarJson.nodes[0].header[0].sidebarName}
        </h1>
        <p>{sidebarData.allSidebarJson.nodes[0].header[0].sidebarTitle}</p>
      </header>
      <nav id="nav">
        <ul>
          {sidebarData.allSidebarJson.nodes[0].sidebar.map(node => (
            <li key={node.anchor}>
              <AnchorLink to={("#" + node.anchor)} title={node.text} />
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          {sidebarData.allSidebarJson.nodes[0].socials.map(node => (
            <li key={node.icon}>
              <a className="socials" href={node.link}>
                <FontAwesomeIcon
                  icon={[(node.prefix), (node.icon)]}
                  className="social-icon"
                />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </section>
  )
}

export default Sidebar
