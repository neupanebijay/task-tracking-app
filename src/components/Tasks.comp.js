// import {useState} from 'react'
import { Task } from './Task.comp'

export const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
        {tasks.map((task)=>(
           
            <Task task = {task} key ={task.id} onDelete={onDelete} onToggle={onToggle} />
        )
        )}


            

            
        </>
    )
}
