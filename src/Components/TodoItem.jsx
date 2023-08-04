import React from 'react'

const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <div className="container text-center bg-red-50">
<h4 className='py-2'>{todo.title}</h4>
      <p className='py-2'>{todo.Desc}</p>
      <button className=" btn btn-sm btn-danger mb-4" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
      
    </div>
  )
}

export default TodoItem
