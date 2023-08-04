import { useState } from 'react'
import Navbar from './Components/Navbar'
import TodoItem from './Components/TodoItem'
import Todos from './Components/Todos'
import Footer from './Components/Footer'
import AddToDo from './Components/AddToDo'


function App() {

  const onDelete = (todo)=> {
    // console.log("i am on delete of" , todo);

   setTodos(todos.filter((e)=>{
    return e!==todo;
   }));
  }
  const addToDo = (title , Desc)=> {
    console.log("Comming from add to do ", title , Desc)
    let sno;
    if (todos.length===0){
      sno=1;
    }else{
      sno= todos[todos.length-1].sno +1;
    }
   
    const myTodo = {
      sno: sno,
      title: title,
      Desc: Desc,
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }
 

  const [ todos, setTodos] = useState ([
    {
      sno: 1,
      title: "Go to the Market",
      Desc: "You have to go to the market to get the job done1"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      Desc: "You have to go to the Mall to get the job done2"
    },
    {
      sno: 3,
      title: "Go to the Ground",
      Desc: "You have to go to the Ground to get the job done3"
    }]
  );
 

  return (
    <>
    <Navbar title="TO DOS LIST"/>
    <div className="bodyy">
    <AddToDo addToDo={addToDo} />
    <Todos todos={todos}  onDelete={onDelete}/>
    </div>
   
    {/* <TodoItem/> */}
    <Footer/>
    </>
  )
}

export default App