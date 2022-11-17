import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <section id="footer">
    <div class="container">
      <ul class="copyright">
        <li><FontAwesomeIcon icon={("fas", "copyright")} color="#64a2d0" /> Untitled. All rights reserved.</li>
      </ul>
    </div>
  </section>
)

export default Footer
