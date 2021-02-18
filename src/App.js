import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/About.comp';
import { AddTask } from './components/AddTask.comp';
import { Footer } from './components/Footer.comp';
import { Header } from './components/Header.comp';
import { Tasks } from './components/Tasks.comp';

function App() {


  const [addCloseTask, setAddCloseTask] = useState(false)
  
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async(id) => {
    const resp = await fetch('http://localhost:5000/tasks')
    const data = await resp.json()
    return data
    // console.log(data)
  }
  // Fetch Task
  const fetchTask = async(id) => {
    const resp = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await resp.json()
    return data
    // console.log(data)
  }
  

// Add Task
const addTask = async(task) => {
  // console.log(task)
  // to add task in the state with new id
  // const id = Math.floor(Math.random()*10000) + 1
  // // console.log(id)
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])

  const resp = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    // since we are adding data we need to add headers as well(even when sending data)
    headers: {
      // defining json content type
      'Content-type': 'application/json'
    },
    // JSON.stringify converts javascript object into json strings
    body: JSON.stringify(task)
  })

const data = await resp.json()
setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])

}

// Delete task 
const deleteTask = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'  
  })

// const deleteTask = (id) => {
  // console.log('Delete task',id)
  setTasks(tasks.filter((task)=>task.id !==id))
}


// Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  )
}



  return (
    <Router>
    <div className="container">
      {/* to chang the add and close button, add prop in header as button is in header */}
      <Header onAddClose={() => setAddCloseTask(!addCloseTask)} addCloseTask={addCloseTask}/>
      
      {/* <Tasks/> */}
      <Route path="/" exact render={(props)=>(
        <>
          {addCloseTask && <AddTask onAddTask={addTask}/>}
          {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder} />)  : (
          'No Tasks to Show')} 
        </>

      )}></Route>    
     
      <Route path="/about" component={About} />
       <Footer />
    </div>
    </Router>
  );
  
  }
export default App;
