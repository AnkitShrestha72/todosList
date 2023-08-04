import React from 'react'
import AddToDo from './AddToDo'
import Todos from './Todos'


const Test = (props) => {
  
  return (
    <div>
          <AddToDo addToDo={props.addToDo} />
          <Todos todos={props.todos} onDelete={props.onDelete} />
    </div>
  )
}

export default Test
