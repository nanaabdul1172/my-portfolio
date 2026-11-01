import { Figma, Palette, ScrollText, Sparkles, SquareTerminal, FileCode } from 'lucide-react'

export default function HomeCardTwo() {
  return (
    <>
    <div className='items-center p-10 flex flex-col gap-5 bg-white/20 backdrop-blur-sm'>
    <div className='text-4xl font-bold text-gray-500 items-center'>
      <h1>My Core Skills</h1>
      </div>
      <div>
        <div className='flex items-center gap-5 m-10'>
          <p className='bg-pink-50 shadow-lg p-5 w-72 gap-3 m-5 flex items-center font-semibold text-2xl rounded-lg hover:bg-gray-200 border border-gray-300'>
            <FileCode size={25} className='text-pink-500'/>
            Html
          </p>
          <p className='bg-pink-50 shadow-lg p-5 w-72 gap-3 m-5 flex items-center font-semibold text-2xl rounded-lg hover:bg-gray-200 border border-gray-300'>
            <ScrollText size={25} className='text-pink-500'/>
            Css
          </p>
          <p className='bg-pink-50 shadow-lg p-5 w-72 gap-3 m-5 flex items-center font-semibold text-2xl rounded-lg hover:bg-gray-200 border border-gray-300'>
            <Palette size={25} className='text-pink-500'/>
            Tailwind Css
          </p>
        </div>
         <div className='flex items-center gap-5 m-10'>
          <p className='bg-pink-50 shadow-lg p-5 w-72 gap-3 m-5 flex items-center font-semibold text-2xl rounded-lg hover:bg-gray-200 border border-gray-300'>
            <SquareTerminal size={25} className='text-pink-500'/>
            JavaScript & ES6
          </p>
          <p className='bg-pink-50 shadow-lg p-5 w-72 gap-3 m-5 flex items-center font-semibold text-2xl rounded-lg hover:bg-gray-200 border border-gray-300'>
            <Sparkles size={25} className='text-pink-500'/>
            React
          </p>
          <p className='bg-pink-50 shadow-lg p-5 w-72 gap-3 m-5 flex items-center font-semibold text-2xl rounded-lg hover:bg-gray-200 border border-gray-300'>
            <Figma size={25} className='text-pink-500'/>
            Figma
          </p>
        </div>
      </div>
      </div>
      </>
  )
}
