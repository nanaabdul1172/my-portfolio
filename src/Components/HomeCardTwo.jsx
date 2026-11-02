import { Figma, Palette, ScrollText, Sparkles, SquareTerminal, FileCode } from 'lucide-react'

export default function HomeCardTwo() {
  return (
    <>
    <div className='items-center p-6 md:p-10 lg:p-16 flex flex-col gap-8 bg-white/20 backdrop-blur-sm'>
      <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-500 text-center'>
        <h1>My Core Skills</h1>
      </div>
      <div className='w-full max-w-7xl'>
        {/* First Row */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6'>
          <div className='bg-pink-50 shadow-lg p-4 md:p-6 flex items-center gap-3 font-semibold text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors'>
            <FileCode size={25} className='text-pink-500 flex-shrink-0'/>
            <span>HTML</span>
          </div>
          <div className='bg-pink-50 shadow-lg p-4 md:p-6 flex items-center gap-3 font-semibold text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors'>
            <ScrollText size={25} className='text-pink-500 flex-shrink-0'/>
            <span>CSS</span>
          </div>
          <div className='bg-pink-50 shadow-lg p-4 md:p-6 flex items-center gap-3 font-semibold text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors'>
            <Palette size={25} className='text-pink-500 flex-shrink-0'/>
            <span>Tailwind CSS</span>
          </div>
        </div>
        
        {/* Second Row */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          <div className='bg-pink-50 shadow-lg p-4 md:p-6 flex items-center gap-3 font-semibold text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors'>
            <SquareTerminal size={25} className='text-pink-500 flex-shrink-0'/>
            <span>JavaScript & ES6</span>
          </div>
          <div className='bg-pink-50 shadow-lg p-4 md:p-6 flex items-center gap-3 font-semibold text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors'>
            <Sparkles size={25} className='text-pink-500 flex-shrink-0'/>
            <span>React</span>
          </div>
          <div className='bg-pink-50 shadow-lg p-4 md:p-6 flex items-center gap-3 font-semibold text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors'>
            <Figma size={25} className='text-pink-500 flex-shrink-0'/>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
