import * as React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => (
  <footer>
    <div class="container copyright">
      <FontAwesomeIcon icon={solid('copyright')} color="#64a2d0" /> 
      2022 Nikole Garcia. All rights reserved.
    </div>
  </footer>
)

export default Footer
