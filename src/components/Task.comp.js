import { FaRegTimesCircle } from 'react-icons/fa'

export const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}` } onDoubleClick={()=>onToggle(task.id)}>
            {/* if task.reminder from tasks is true then we have class reminder  */}
            <h3>{task.text}
            <FaRegTimesCircle
             style={{color: 'red', cursor: 'pointer'}} 
             onClick= {()=>onDelete(task.id)}
             /></h3>
            <p>{task.day}</p>
        </div>
    )
}
