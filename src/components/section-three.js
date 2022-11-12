import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Three = () => (
  <section id="three">
    <div class="container">
      <h3>A Few Accomplishments</h3>
      <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
      <div class="features">
        <article>
          <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
          <div class="inner">
            <h4>Pharetra fusce facilisis</h4>
            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
          </div>
        </article>
        <article>
          <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
          <div class="inner">
            <h4>Condimentum mus ipsum orci</h4>
            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
          </div>
        </article>
        <article>
          <a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
          <div class="inner">
            <h4>Cubilia enim congue at cep amet</h4>
            <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default Three
