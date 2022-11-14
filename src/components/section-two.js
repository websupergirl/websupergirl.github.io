import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Two = () => (
  <section id="two">
    <div class="container">
    <h3>Things I Can Do</h3>
    <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.</p>
    <ul class="feature-icons">
      <li><FontAwesomeIcon icon={solid('code')} color="#64a2d0" /> Neque sit cep ante</li>
      <li><FontAwesomeIcon icon={solid('cubes')} color="#64a2d0" /> Augue fusce morbi</li>
      <li><FontAwesomeIcon icon={solid('book')} color="#64a2d0" /> Cras augue cep vitae</li>
      <li><FontAwesomeIcon icon={solid('coffee')} color="#64a2d0" /> Augue enim dictum</li>
      <li><FontAwesomeIcon icon={solid('bolt')} color="#64a2d0" /> Porttitor ante</li>
      <li><FontAwesomeIcon icon={solid('users')} color="#64a2d0" /> Tempus risus consequat</li>
    </ul>
    </div>
  </section>
)

export default Two
