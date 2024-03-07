
import './App.css'
import { BiChevronUp } from "react-icons/bi"
import { BiSolidHelpCircle } from "react-icons/bi"

function App() {
 

  return (
    <>
      <div className='bg-neutral-700 text-stone-50 py-8 px-5 rounded-3xl flex flex-col'>
        
        <div className='flex justify-between'>
          <h2>EXTRUSION</h2>
          <div className='flex'><BiSolidHelpCircle /><BiChevronUp /></div>
        </div>  
        
        <div className='flex pl-2 justify-center m-5'> 
          <label htmlFor="linear">Linear:</label>
          <input type="checkbox" name='linear' checked className='p-10' />
          <input type="number" value='3' className='bg-neutral-500 rounded-md h-8 w-20' />
        </div>

        <div className='flex justify-center text-stone-400 hover:text-stone-50 m-5'>
          <label htmlFor="variable">Variable:</label>
          <input type="checkbox" name='variable' className='bg-neutral-500' />
          
          <label htmlFor="min">Min:</label>
          <input type="number" name='min' value='0' className='bg-neutral-500 rounded-md h-8 w-20' />

          <label htmlFor="max">Max:</label>
          <input type="number" name='max' value='2' className='bg-neutral-500 rounded-md h-8 w-20' />
        </div>

        <button className='bg-neutral-500 p-1 rounded-3xl'>Smart Reset</button>
      </div>
    </>
  )
}

export default App
