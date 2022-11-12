import * as React from "react"

import Sidebar from "../components/sidebar"
import One from "../components/section-one"
import Two from "../components/section-two"
import Three from "../components/section-three"
import Four from "../components/section-four"
import Footer from "../components/footer"

import Seo from "../components/seo"

import "../assets/css/main.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <>
    <Sidebar />
    <div id="wrapper">
      <div id="main">
        <One />
        <Two />
        <Three />
        <Four />
      </div>
      <Footer />
    </div>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Resume" />

export default IndexPage
