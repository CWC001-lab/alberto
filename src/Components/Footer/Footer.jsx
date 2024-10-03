import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       <footer>
          <div class="footer-container">
              <div class="footer-column">
                  <div class="logo">
                      <img src="Alberto Images/Alberto_Footer_logo2-removebg-preview.png" alt=""/><h2>Alberto</h2>
                  </div>
                  <p>Subscribe to our newsletter to get updates on
                    our latest offers!</p>
                  <div class="email-form">
                      <input type="email" placeholder="Email Address"/>
                      <button><i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                  <div class="social-icons">
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="#"><i class="fab fa-pinterest"></i></a>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
              </div>
  
              <div class="footer-column">
                  <h3>Links</h3>
                  <ul>
                      <a href="/"><i class="fa-solid fa-angle-right"></i> Home</a>
                      <a href="/about"><i class="fa-solid fa-angle-right"></i> About us</a>
                      <a href="/products"><i class="fa-solid fa-angle-right"></i> Product</a>
                      <a href="/technology"><i class="fa-solid fa-angle-right"></i> Technology</a>
                      <a href="/contact"><i class="fa-solid fa-angle-right"></i> Contact</a>
                  </ul>
              </div>
  
              <div class="footer-column">
                  <h3>News</h3>
                  <div class="news-item">
                    <img src="https://i.pinimg.com/474x/b9/a3/d7/b9a3d713979b1ff4c11a4b078713a26d.jpg" alt="HomeImages"/>
                      <div class="news-info">
                          <p><strong>Sept 13, 2024</strong></p>
                          <a href="#">How to purchase watches in the forms</a>
                      </div>
                  </div>
                  <div class="news-item">
                    <img src="https://i.pinimg.com/474x/68/7b/a4/687ba457388f85c2c1bd21b3e4f0b49e.jpg" alt="HomeImages"/>
                      <div class="news-info">
                          <p><strong>Sept 13, 2024</strong></p>
                          <a href="#">How to purchase watches in the forms</a>
                      </div>
                  </div>
              </div>
  
              <div class="footer-column">
                <h3>Contact</h3>
                <p class="line"><i class="fa-solid fa-phone-volume fa-rotate-by" style={{'--fa-rotate-angle': '310deg'}}></i>  +(787)265-6370</p>
                <hr/>
                <p class="line"><i class="fas fa-envelope"></i> sales@shopalbertopr.com</p>
                <hr/>
                <p class="line"><i class="fa-solid fa-location-dot"></i>Mayaguez and Isabela, Puerto Rico.</p>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer

