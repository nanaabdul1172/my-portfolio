import { useState } from 'react'
import { File, FileChartColumn, Home, PhoneCallIcon, User, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
    <div className='flex justify-between items-center px-4 py-4 md:px-6 lg:px-10 shadow-md border-b-2 border-pink-700 bg-white/20 backdrop-blur-sm border border-gray-300'>
          <div>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>MyPortfolio</h1>
         </div>

         {/* Desktop Navigation */}
         <nav aria-label="Main navigation" className='hidden md:block'>
             <ul className='flex gap-3 lg:gap-5'>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-pink-500 rounded'>
                      <Home size={16} aria-hidden="true" />
                      <Link to="/" className="focus:outline-none">Home</Link>
                      </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-pink-500 rounded'>
                      <User size={16} aria-hidden="true" />
                      <Link to="/about" className="focus:outline-none">About</Link>
                      </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500  text-white font-bold hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-pink-500 rounded'> 
                        <FileChartColumn size={16} aria-hidden="true" />
                        <Link to="/projects" className="focus:outline-none">Projects</Link>
                        </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-pink-500 rounded'>
                        <PhoneCallIcon size={16} aria-hidden="true" />
                        <Link to="/contact" className="focus:outline-none">Contact</Link>
                    </li>
              </ul>
         </nav>

         {/* Desktop Resume Button */}
         <div className='hidden md:block'>
              <a href="/resume.pdf" download className='font-bold flex border-none px-3 py-2 lg:px-4 lg:py-2 rounded-md items-center gap-2 hover:bg-pink-700 bg-pink-500 text-black focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2 transition-colors' aria-label="Download Resume">
                <File size={16} aria-hidden="true" />
                <span className='hidden lg:inline'>Download Resume</span>
                <span className='lg:hidden'>Resume</span>
              </a>
         </div>

         {/* Mobile Menu Button */}
         <button 
           onClick={toggleMenu}
           className='md:hidden text-white p-2 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded'
           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
           aria-expanded={isMenuOpen}
         >
           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
         </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className='md:hidden bg-white/95 backdrop-blur-sm border-b-2 border-pink-700 shadow-lg'>
        <nav aria-label="Mobile navigation" className='flex flex-col p-4'>
          <Link 
            to="/" 
            onClick={closeMenu}
            className='flex items-center gap-3 p-4 text-gray-900 font-bold hover:bg-pink-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500'
          >
            <Home size={20} aria-hidden="true" />
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={closeMenu}
            className='flex items-center gap-3 p-4 text-gray-900 font-bold hover:bg-pink-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500'
          >
            <User size={20} aria-hidden="true" />
            About/Resume
          </Link>
          <Link 
            to="/projects" 
            onClick={closeMenu}
            className='flex items-center gap-3 p-4 text-gray-900 font-bold hover:bg-pink-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500'
          >
            <FileChartColumn size={20} aria-hidden="true" />
            Projects
          </Link>
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className='flex items-center gap-3 p-4 text-gray-900 font-bold hover:bg-pink-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500'
          >
            <PhoneCallIcon size={20} aria-hidden="true" />
            Contact
          </Link>
          <a 
            href="/resume.pdf" 
            download
            className='flex items-center gap-3 p-4 mt-2 bg-pink-500 text-black font-bold rounded-lg hover:bg-pink-600 transition-colors justify-center focus:outline-none focus:ring-2 focus:ring-pink-700'
            aria-label="Download Resume"
          >
            <File size={20} aria-hidden="true" />
            Download Resume
          </a>
        </nav>
      </div>
    )}
    </>
  )
}
