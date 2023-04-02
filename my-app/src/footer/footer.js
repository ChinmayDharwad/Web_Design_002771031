import React from 'react'
import './footer.css'
// import {GrInstagram} from 'react-icons/gr'
// import {BsFacebook} from 'react-icons/bs'
// import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jobs Portal</a>

      {/* <ul className='personalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}

      {/* <div className='footer_socials'>
      <a href="https://www.instagram.com/">{GrInstagram}</a>
      <a href="https://www.facebook.com/">{BsFacebook}</a>
      <a href="https://www.twitter.com/">{AiFillTwitterCircle}</a>
      </div> */}

      <div className='footer_copyright'>
        <small>&copy; Jobs Portal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer