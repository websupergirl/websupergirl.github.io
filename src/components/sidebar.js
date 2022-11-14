import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Sidebar = () => (
  <section id="sidebar">
    <header>
      <span class="image avatar"><img src="images/avatar.jpg" alt="" /></span>
      <h1 id="logo"><a href="#">Jane Doe</a></h1>
      <p>Non col pellentesque ut cep augue at<br />
      cep ata sed commodo quam</p>
    </header>
    <nav id="nav">
      <ul>
        <li><a href="#one" class="active">About</a></li>
        <li><a href="#two">Things I Can Do</a></li>
        <li><a href="#three">A Few Accomplishments</a></li>
        <li><a href="#four">Contact</a></li>
      </ul>
    </nav>
    <footer>
      <ul class="icons">
        <li><a href="#"><FontAwesomeIcon icon={brands('Twitter')} color="#b7eadc" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={brands('Instagram')} color="#b7eadc" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={brands('Github')} color="#b7eadc" /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={brands('LinkedIn')} color="#b7eadc" /></a></li>
      </ul>
    </footer>
  </section>
)

export default Sidebar
