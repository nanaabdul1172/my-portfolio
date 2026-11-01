import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'

export default function Footer() {
  return (
    <>
    <div className='p-10 flex justify-around gap-5 shadow-lg rounded-lg bg-white/50 backdrop-blur-sm border-t-2 border-pink-700'>
      <div>
        <img src={logo} alt="Portfolio Logo" width={80} className='ml-20'/>
        <p className='text-1xl font-semibold m-3 mt-10 text-gray-500'>
          © 2024 Nana Firdausi. All rights reserved.
        </p>
      </div>
      <nav aria-label="Footer quick links">
        <h3 className='text-2xl font-bold m-3 text-gray-500'>QUICK LINKS</h3>
        <ul className='text-1xl font-semibold m-3 text-gray-500'>
          <li>
            <Link to="/" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline'>About/Resume</Link>
          </li>
          <li>
            <Link to="/projects" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline'>Projects</Link>
          </li>
          <li>
            <Link to="/contact" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline'>Contact</Link>
          </li>
        </ul>
      </nav>
       <nav aria-label="Social media links">
        <h3 className='text-2xl font-bold m-3 text-gray-500'>CONNECT</h3>
        <ul className='text-1xl font-semibold m-3 text-gray-500'>
          <li>
            <a href="https://github.com/nanafirdausi" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline' aria-label="Visit GitHub profile">Github</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/nanafirdausi" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline' aria-label="Visit LinkedIn profile">Linkedin</a>
          </li>
          <li>
            <a href="https://figma.com/@nanafirdausi" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline' aria-label="Visit Figma profile">Figma</a>
          </li>
          <li>
            <a href="https://behance.net/nanafirdausi" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 focus:outline-none focus:text-pink-600 focus:underline' aria-label="Visit Behance profile">Behance</a>
          </li>
        </ul>
      </nav>
      <div>
        <h3 className='text-2xl font-bold m-3'>CONTACT</h3>
        <p className='text-1xl font-semibold m-3'>Open to new opportunities, <br />
          collaborations and remote roles. </p>
          <a href="https://linkedin.com/in/nanafirdausi" target="_blank" rel="noopener noreferrer" className='flex bg-pink-500 p-3 m-3 items-center rounded-lg hover:bg-pink-700 hover:scale-105 transition-transform font-bold text-black focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2' aria-label="Get in touch via LinkedIn">
            <MessageCircle size={16} className='mr-2' aria-hidden="true" />
            Get in touch
          </a>
        </div>
    </div>
    </>
  )
}
