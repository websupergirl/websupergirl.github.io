import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => (
  <section id="footer">
    <div class="container">
      <ul class="copyright">
        <li><FontAwesomeIcon icon={solid('copyright')} color="#64a2d0" /> Untitled. All rights reserved.</li>
      </ul>
    </div>
  </section>
)

export default Footer
