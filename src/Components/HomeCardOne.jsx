import { ArrowBigRight, File } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeCardOne() {
  return (
    <>
    <div className='p-6 md:p-10 lg:p-16 flex justify-center items-center bg-white/20 backdrop-blur-sm'>
        <div className='max-w-7xl w-full'>
            <div className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold p-2 text-center md:text-left'>Hello, I'm</div>
            <div className='text-pink-700 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl p-3 text-center md:text-left leading-tight'>Firdausi Onize Abdulrahman</div>
            <p className='text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl p-2 text-center md:text-left'>FRONT END DEVELOPER | AI/ML ENGINEER IN TRAINING</p>
            <p className='p-2 text-gray-950 text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left leading-relaxed max-w-4xl mx-auto md:mx-0'>
               Computer Science graduate and web developer/AI engineer in training with a strong foundation in modern web technologies and machine learning fundamentals. Combines core software development skills with exceptional organization, clear communication, and process discipline. Eager to contribute clean code, collaborate effectively, and help drive development projects on schedule.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 lg:mt-10 items-center justify-center md:justify-start'>
                <Link to="/projects" className='flex items-center justify-center gap-4 bg-pink-500 text-black font-bold px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-pink-700 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2 w-full sm:w-auto'>
                    View projects
                    <ArrowBigRight size={20} aria-hidden="true" />
                </Link>
                <a href="/resume.pdf" download className='flex items-center justify-center gap-3 bg-white text-black font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-200 border border-gray-300 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 w-full sm:w-auto' aria-label="Download Resume">
                    <File size={20} aria-hidden="true" />
                    Download Resume
                </a>
            </div>
        </div>
    </div>
    </>
  )
}
