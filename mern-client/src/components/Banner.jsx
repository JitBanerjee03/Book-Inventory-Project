import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>

      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

          {/* Left Side*/}
          <div className='md:w-1/2 space-y-8 h-full'>
            <h1 className='text-5xl font-bold leading-snug text-black'>Buy and sell your Book <span className='text-blue-700'>for the best prices</span></h1>
            <p className='md:w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Minima ab doloribus expedita ad deleniti, praesentium eum similique officia. 
               Dolor itaque quo incidunt voluptas sit corrupti sequi architecto blanditiis ducimus reprehenderit!</p>
            
            <div>
                <input type="search" name='search' id='search' placeholder='search the book' className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
          </div>
      
          {/* Right Side*/}
          <div>
            <BannerCard/>
          </div>
      </div>
    
    </div>
  )
}

export default Banner

{/*      <div className='h-screen'>
        Home
      </div>
      <div className='h-screen bg-red-600'>

      </div>
 */}
