import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle ={
    minHeight: "70vh",
  }

  return (
    <div className='container text-center my-5' style={myStyle}>
     <h1 className='font-bold text-[30px] mb-4 py-2'>Todos List</h1>
     {props.todos.length==0? "No todos to Display" :
     props.todos.map((todo) =>{
      return(
        <>
        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>    
        </>
      ) 
        })}
  
    </div>
  )
}


export default Todos
