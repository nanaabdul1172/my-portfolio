import { ArrowBigRight, File } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeCardOne() {
  return (
    <>
    <div className=' p-10 flex justify-around gap-5 bg-white/20 backdrop-blur-sm'>
        <div>
            <div className='text-white text-8xl font-bold p-2 ml-7'>Hello, i'm</div>
             <div className='text-pink-700 font-bold text-8xl p-3 ml-5'>Nana Firdausi</div>
            <p className='text-white font-semibold text-2xl p-2 ml-7'>FRONT END DEVELOPER | UI/UX ARCHITECT</p>
            <p className='p-2 text-gray-950 text-2xl ml-7'>
                Building pixel perfect, accessible and high performance web <br />
                experiences with a keen eye for modern design and user interactions. <br />
                Specializing in crafting robust, scalable, and intuitive interfaces <br />
                that delight users and drive business growth.
            </p>
            <div className='flex gap-5 ml-7 mt-10'>
                <Link to="/projects" className='flex items-center gap-4 bg-pink-500 text-black font-bold p-4 rounded-md hover:bg-pink-700 hover:scale-105 transition-transform'>
                    View projects
                    <ArrowBigRight size={16}/>
                </Link>
                <a href="/resume.pdf" download className='flex items-center gap-3 bg-white text-black font-bold p-4 rounded-lg hover:bg-gray-200 border border-gray-300 hover:scale-105 transition-transform' aria-label="Download Resume">
                    <File size={17}/>
                    Download Resume
                </a>
            </div>
        </div>
        {/* <div className='w-100 h-100'>
            <img src="logo.png" />
        </div> */}
    </div>
    </>

  )
}
