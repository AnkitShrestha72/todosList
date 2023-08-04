import React from 'react'
import { useState } from 'react'

const AddToDo = (props) => {
  const [title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")

  const submit = (e) => {
      e.preventDefault(); // This will not reload the page
      if(!title || !Desc ){
        alert("Title or desc should not be empty")
      }
      else{
        props.addToDo(title , Desc)
        setTitle("");
        setDesc("");
      }
      
  }

  return (
    <>
       <div className='Container'>
        <h3 className='font-bold text-[30px] text-center mt-4'>Add Your Todos List</h3>
      <form className="w-full max-w-sm mt-5 m-auto" onSubmit={submit}>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="title">
        ToDos Title
      </label>
    </div>
    <div className="md:w-2/3">
      <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text" placeholder='Title'/>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="Desc">
        Description
      </label>
    </div>
    <div className="md:w-2/3">
      <input  value={Desc} onChange={(e)=>{setDesc(e.target.value)}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="Desc" type="text" placeholder='Description'/>
    </div>
  </div>

  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
       Add ToDos
      </button>
    </div>
  </div>
</form>
    </div>
    </>
 
  )
}

export default AddToDo
