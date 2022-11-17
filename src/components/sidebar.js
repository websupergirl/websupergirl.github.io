import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab, fas)

let faIcon = null
let faPrefix = null
let anchorLink = "#"

const Sidebar = () => {
  const sidebar = useStaticQuery(graphql`
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
  console.log({ sidebar })

  return (
    <section id="sidebar">
      <header>
        <span class="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">
          {sidebar.allSidebarJson.nodes[0].header[0].sidebarName}
        </h1>
        <p>{sidebar.allSidebarJson.nodes[0].header[0].sidebarTitle}</p>
      </header>
      <nav id="nav">
        <ul>
          {sidebar.allSidebarJson.nodes[0].sidebar.map(node => (
            <li key={node.anchor}>
              <AnchorLink to={(anchorLink = "#" + node.anchor)} title={node.text} />
            </li>
          ))}
        </ul>
      </nav>
      <footer>
        <ul class="icons">
          {sidebar.allSidebarJson.nodes[0].socials.map(node => (
            <li key={node.icon}>
              <a class="socials" href={node.link}>
                <FontAwesomeIcon
                  icon={[(faPrefix = node.prefix), (faIcon = node.icon)]}
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
