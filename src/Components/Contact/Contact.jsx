import './Contact.css';
import contimg from '../../assets/img/contimg.jpg';
import { FaFacebook, FaLocationArrow } from 'react-icons/fa';
function Contact(){
    return(
        <>
      
        <header>
      <nav class="navbar">
        <h1>Alberto.</h1>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Shop</a>
          </li>
          <li class="nav-item">
            <a href="contact.html" class="nav-link">Contacts</a>
          </li>
        </ul>
      </nav>
      <h2>CONTACTS</h2>
    </header>

    <div class="contact">
      <div class="address">
        <div class="circle">
      <FaLocationArrow/>
        </div>
        <h3>
          Address:
          <span>198 West 21th St., PA</span>
        </h3>
      </div>

      <div class="address">
        <i class="fa-solid fa-phone"></i>
        <h3>Phone: <span>+ 1235 2355 98</span></h3>
      </div>

      <div class="address">
        <i class="fa-solid fa-paper-plane"></i>
        <h3>Email: <span>info@yoursite.com</span></h3>
      </div>

      <div class="address">
        <i class="fa-solid fa-globe"></i>
        <h3>Website: <span>yoursite.com</span></h3>
      </div>
    </div>

    <div class="firstbody">
      <div class="cont">
        <img src={contimg} alt="" />
        <div class="form">
          <h1>Contact Us</h1>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name="comments"
            id="comments"
            cols="62"
            rows="8"
            placeholder="Message"
          ></textarea>
          <a href="#"><button>Send Message</button></a>
        </div>
      </div>
    </div>
        </>
    )
}
export default Contact;