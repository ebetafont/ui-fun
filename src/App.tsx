
import './App.css'
import { BiChevronUp, BiChevronDown } from "react-icons/bi"
import { BiSolidHelpCircle } from "react-icons/bi"


function App() {

  function steppingUp(inputID: string){
    let input = document.getElementById(inputID) as HTMLInputElement
    input.stepUp()
  }
    
  function steppingDown(inputID: string){
    let input = document.getElementById(inputID) as HTMLInputElement
    input.stepDown();
  }

  return (
    <>
      <div className='bg-neutral-800 text-xl text-stone-50 w-[500px] py-8 px-5 rounded-3xl flex flex-col'>
        
        <div className='flex justify-between'>
          <h2>EXTRUSION</h2>
          <div className='flex'><BiSolidHelpCircle className='text-stone-200 text-2xl' /><BiChevronUp className='text-4xl -mt-2' /></div>
        </div>  
        
        <div className='flex gap-10 text-stone-400 hover:text-stone-50 pl-2 m-5'> 
          <div className="primer">
            <label htmlFor="linear">Linear:</label>
            <input type="checkbox" name='linear' checked className='p-10' />
          </div>
          <div className="quantity">
            <input type="number" value='3' id='input-linear' className='bg-neutral-700 hover:bg-neutral-600 rounded-md h-8 w-20' />
            <button className="quantity-button quantity-up" onClick={e=>steppingUp("input-linear")}><BiChevronUp /></button>
            <button className="quantity-button quantity-down" onClick={e=>steppingDown("input-linear")}><BiChevronDown /></button>
          </div>
        </div>

        <div className='flex gap-10 text-stone-400 hover:text-stone-50 m-5'>
          
          <div className="primer">
            <label htmlFor="variable">Variable:</label>
            <input type="checkbox" name='variable' className='bg-neutral-500' />
          </div>

          <div className="quantity">
            <label htmlFor="min">Min:</label>
            <input type="number" name='min' value='0' id='input-min' className='bg-neutral-700 hover:bg-neutral-600 rounded-md h-8 w-20' />
            <button className="quantity-button quantity-up" onClick={e=>steppingUp("input-min")}><BiChevronUp /></button>
            <button className="quantity-button quantity-down" onClick={e=>steppingDown("input-min")}><BiChevronDown /></button>
          </div>

          <div className="quantity">
            <label htmlFor="max">Max:</label>
            <input type="number" name='max' value='2' id='input-max' className='bg-neutral-700 hover:bg-neutral-600 rounded-md h-8 w-20' />
            <button className="quantity-button quantity-up" onClick={e=>steppingUp("input-max")}><BiChevronUp /></button>
            <button className="quantity-button quantity-down" onClick={e=>steppingDown("input-max")}><BiChevronDown /></button>
          </div>

        </div>

        <button className='bg-neutral-700 w-[200px] py-2 px-8 rounded-3xl self-end'>Smart Reset</button>

      </div>
    </>
  )
}


export default App
