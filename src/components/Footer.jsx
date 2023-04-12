import React from 'react'
import "../style/Footer.css"

function Footer() {
  return (
    <div>
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1 textControl">&copy; 2023 YOU. LIMITED. ALL RIGHTS RESERVED.</p>
      
      <p className="mb-1 textControl">YOU® IS A REGISTERED TRADEMARK OF YOU LONDON LTD.</p>

      <ul className="list-inline">
        <li className="list-inline-item"><a href="#" className='linksControl'>PRIVACY POLICY</a></li>
        <li className="list-inline-item"><a href="#" className='linksControl'>GDPR</a></li>
        <li className="list-inline-item"><a href="#" className='linksControl'>TERMS & CONDITIONS</a></li>
        <li className="list-inline-item"><a href="#" className='linksControl'>DELIVERY & SHIPPING INFORMATION</a></li>
      </ul>
    </footer>
  </div>
  )
}

export default Footer