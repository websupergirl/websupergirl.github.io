import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const One = () => (
  <section id="one">
    <div class="image main" data-position="center">
      <StaticImage
        src="../assets/images/banner.jpg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="banner"
      />
    </div>
    <div class="container">
    <header class="major">
      <h2>Read Only</h2>
      <p>Eget et adipiscing ornare vestibulum quam<br />
      interdum blandit ut Adipiscing.</p>
    </header>
    <p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
  </div>
  </section>
)

export default One
