import React from 'react'

const App = () => {
  return (
    <div className='w-full'>
      <div className='h-screen w-full relative '>

        {/* for outlint back border */}
        {/* these line cover all Home servies sections */}
        <div className="Backarea h-full w-full  grid grid-cols-2 ">
        <div className="h-full w-full border-r border-gray-300"></div>
                  <div className='h-full w-full ' ></div>
        </div>
        <div className="frontarea absolute h-full w-full top-0 left-0 z-99 opacity-0  bg-red-600 "></div>

      </div>

      {/* these line cover all Home servies sections */}

      <div className='h-screen w-full bg-blue-500'></div>



    </div>
  )
}

export default App
