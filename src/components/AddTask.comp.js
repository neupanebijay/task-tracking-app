import { useState } from 'react'

export const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSaveSubmit= (e) => {
        e.preventDefault();
        
        if(!text){
            alert('please add a task')
        }

        onAddTask({text, day, reminder})
        // it clears the form after saving the input
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSaveSubmit}>
        
            <div className="form-control">
                <label>Add Task:  </label>
                <input type="text"  placeholder="Add task here" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time:  </label>
                <input type="text"  placeholder="Add date and time of the task" value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder:  </label>

                    {/* if reminder is true than checked else unchecked */}
                <input type="checkbox"
                    checked={reminder}
                    value= { reminder } 
                    onChange={(e)=> setReminder(e.currentTarget.checked)}/>
                
            </div>
                <input type="submit" value="Save Task" className="btn btn-block"/>
        
        </form>
    )
}
