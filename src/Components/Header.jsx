import { File, FileChartColumn, Home, PhoneCallIcon, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='flex justify-between items-center p-2 shadow-md p-10 border-b-2 border-pink-700 bg-white/20 backdrop-blur-sm border border-gray-300'>
          <div>
              <h1 className='text-4xl font-bold ml-3 text-white'>MyPortfolio</h1>
         </div>
         <nav aria-label="Main navigation">
             <ul className='flex gap-5'>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-pink-500 rounded'>
                      <Home size={16} aria-hidden="true" />
                      <Link to="/" className="focus:outline-none">Home</Link>
                      </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform focus-within:ring-2 focus-within:ring-pink-500 rounded'>
                      <User size={16} aria-hidden="true" />
                      <Link to="/about" className="focus:outline-none">About/Resume</Link>
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
         <div>
              <button className='font-bold flex border-none p-2 rounded-md items-center gap-1 hover:bg-pink-700 bg-pink-500 text-black mr-3 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2'>
                <File size={16} aria-hidden="true" />
                <a href="/resume.pdf" download aria-label="Download Resume">Download Resume</a>
              </button>
         </div>
    </div>
    </>
  )
}
