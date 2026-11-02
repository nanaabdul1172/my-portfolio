import { ArrowBigRight, File } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeCardOne() {
  return (
    <>
    <div className=' p-10 flex justify-around gap-5 bg-white/20 backdrop-blur-sm'>
        <div>
            <div className='text-white text-8xl font-bold p-2 ml-7'>Hello, i'm</div>
             <div className='text-pink-700 font-bold text-8xl p-3 ml-5'>Firdausi Onize Abdulrahman</div>
            <p className='text-white font-semibold text-2xl p-2 ml-7'>FRONT END DEVELOPER | AI/ML ENGINEER IN TRAINING</p>
            <p className='p-2 text-gray-950 text-2xl ml-7'>
               Computer Science graduate and web developer/AI engineer in training with a strong foundation in modern web technologies and machine learning fundamentals. Combines core software development skills with exceptional organization, clear communication, and process discipline. Eager to contribute clean code, collaborate effectively, and help drive development projects on schedule.
            </p>
            <div className='flex gap-5 ml-7 mt-10'>
                <Link to="/projects" className='flex items-center gap-4 bg-pink-500 text-black font-bold p-4 rounded-md hover:bg-pink-700 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2'>
                    View projects
                    <ArrowBigRight size={16} aria-hidden="true" />
                </Link>
                <a href="/resume.pdf" download className='flex items-center gap-3 bg-white text-black font-bold p-4 rounded-lg hover:bg-gray-200 border border-gray-300 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2' aria-label="Download Resume">
                    <File size={17} aria-hidden="true" />
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
