import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'

export default function Footer() {
  return (
    <>
    <div className='p-6 md:p-10 flex flex-col md:flex-row md:justify-around gap-8 md:gap-5 shadow-lg rounded-lg bg-white/50 backdrop-blur-sm border-t-2 border-pink-700'>
      <div className='text-center md:text-left'>
        <img src={logo} alt="Portfolio Logo" width={80} className='mx-auto md:mx-0 md:ml-20'/>
        <p className='text-sm md:text-base font-semibold mt-6 md:mt-10 text-gray-500'>
          © 2024 Nana Firdausi. All rights reserved.
        </p>
      </div>
      <nav aria-label="Footer quick links">
        <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-500 text-center md:text-left'>QUICK LINKS</h3>
        <ul className='text-sm md:text-base font-semibold text-gray-500 space-y-2 text-center md:text-left'>
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
        <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-500 text-center md:text-left'>CONNECT</h3>
        <ul className='text-sm md:text-base font-semibold text-gray-500 space-y-2 text-center md:text-left'>
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
      <div className='text-center md:text-left'>
        <h3 className='text-xl md:text-2xl font-bold mb-3'>CONNECT</h3>
        <p className='text-sm md:text-base font-semibold mb-4'>Open to new opportunities, <br className='hidden md:block' />
          collaborations and remote roles. </p>
          <a href="https://linkedin.com/in/nanafirdausi" target="_blank" rel="noopener noreferrer" className='inline-flex bg-pink-500 px-4 py-3 items-center justify-center rounded-lg hover:bg-pink-700 hover:scale-105 transition-transform font-bold text-black focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2' aria-label="Get in touch via LinkedIn">
            <MessageCircle size={16} className='mr-2' aria-hidden="true" />
            Get in touch
          </a>
        </div>
    </div>
    </>
  )
}
