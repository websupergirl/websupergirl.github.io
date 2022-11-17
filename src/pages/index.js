import * as React from "react"

import Sidebar from "../components/sidebar"
import Intro from "../components/intro"
import Highlights from "../components/highlights"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Speaking from "../components/speaking"
import Publications from "../components/publications"
import Community from "../components/community"
import Education from "../components/education"
import Coursework from "../components/coursework"
import Three from "../components/section-three"
import Interests from "../components/interests"
import Footer from "../components/footer"

import Seo from "../components/seo"

import { Script } from "gatsby"

import "../assets/css/main.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab, fas)

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <>
    <Sidebar />
    <div id="wrapper">
      <div id="main">
        <Intro />
        <Highlights />
        <Experience />
        <Skills />
        <Speaking />
        <Publications />
        <Community />
        <Education />
        <Coursework />
        <Three />
        <Interests />
      </div>
      <Footer />
    </div>
    <Script src="../assets/js/util.js" />
    <Script src="../assets/js/main.js" />
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Resume" />

export default IndexPage
