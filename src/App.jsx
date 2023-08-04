import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import TodoItem from "./Components/TodoItem";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import AddToDo from "./Components/AddToDo";
import About from "./Components/About";
import Test from "./Components/Test";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    // console.log("i am on delete of" , todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addToDo = (title, Desc) => {
    console.log("Comming from add to do ", title, Desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      Desc: Desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Navbar title="TO DOS LIST" />
        <Routes>
          <Route
           exact path="/Home"  element={<Test addToDo={addToDo} todos={todos} onDelete={onDelete}/>} >
           
              
            
          </Route>

          <Route  exact path="/About" element={<About/>}>
          
          </Route>
        </Routes>

        {/* <TodoItem/> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
