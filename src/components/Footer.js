import React from 'react'
import Twitter from "../assets/twitter.png";
import Github from "../assets/github.png";
import Youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="main">
          <div>
            <h6>About</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum sequi harum voluptatum quas quos possimus dolores commodi consequatur maiores ea sed, inventore expedita, fugit ipsum. Eos, reiciendis. Repellendus id nam a odit sint doloremque ab et, vel est voluptatum?</p>
          </div>

          <div>
            <h6>Links</h6>
            <ul className="footer-links">
              <li><a href="/">solution</a></li>
              <li><a href="/">integration</a></li>
              <li><a href="/">pricing</a></li>
              <li><a href="/">resources</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
              <a href="/">TESTREX</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-media">

              <li><a href="/"><img src={Twitter} alt="" /></a></li>
              <li><a href="/"><img src={Github} alt="" /></a></li>
              <li><a href="/"><img src={Youtube} alt="" /></a></li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
