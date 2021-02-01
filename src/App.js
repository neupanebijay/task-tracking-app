import { useState } from 'react'
import './App.css';
import { AddTask } from './components/AddTask.comp';
import { Header } from './components/Header.comp';
import { Tasks } from './components/Tasks.comp';

function App() {
  
  const [tasks, setTasks] = useState([
    {
    id : 1,
    text: 'Doctors appointment',
    day: 'FEb 5th at 2.30pm',
    reminder: true,

 },
{
    id : 2,
    text: 'School meeting',
    day: 'FEb 15th at 12pm',
    reminder: true,

 },
{
    id : 3,
    text: 'Shopping for party',
    day: 'Feb 12th',
    reminder: true,

 },
{
    id : 4,
    text: 'Blood test',
    day: 'Mar 1st 10am',
    reminder: true,

 },
{
    id : 5,
    text: 'Take kids to the zoo',
    day: 'Jan 28th',
    reminder: false,

 },
]);


// delete task 
const deleteTask = (id) => {
  // console.log('Delete task',id)
  setTasks(tasks.filter((task)=>task.id !==id))
}

// toggle Reminder
const toggleReminder = (id) => {
  // console.log(id);
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
      <Header />
      <AddTask />
      {/* <Tasks/> */}
     {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder} />)  : (
       'No Tasks to Show')} 
    </div>
  );
  
  }
export default App;
