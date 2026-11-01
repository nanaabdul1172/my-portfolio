import { File, FileChartColumn, Home, PhoneCallIcon, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='flex justify-between items-center p-2 shadow-md p-10 border-b-2 border-pink-700 bg-white/20 backdrop-blur-sm border border-gray-300'>



          <div>
              <h1 className='text-4xl font-bold ml-3 text-white '>MyPortfolio</h1>

         </div>
         <div>
             <ul className='flex gap-5'>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform'>
                      <Home size={16}/>
                      <Link to="/">Home</Link>
                      </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform'>
                      <User size={16}/>
                      <Link to="/about">About/Resume</Link>
                      </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500  text-white font-bold hover:scale-110 transition-transform'> 
                        <FileChartColumn size={16}/>
                        <Link to="/projects">Projects</Link>
                        </li>
                    <li className='flex p-2 items-center gap-1 hover:text-pink-500 text-white font-bold hover:scale-110 transition-transform'>
                        <PhoneCallIcon size={16}/>
                        <Link to="/contact">Contact</Link>
                    </li>
              </ul>
         </div>
         <div>
              <button className='font-bold flex border-none p-2 rounded-md items-center gap-1 hover:bg-pink-700 bg-pink-500 text-black mr-3'>
                <File size={16}/>
                <a href="/resume.pdf" download aria-label="Download Resume">Download Resume</a>
              </button>
         </div>
    </div>
    </>
  )
}
