
export const AddTask = () => {
    return (
        <form>
            <div className="add-form">
                <div className="form-control">
                    <label>Add Task:  </label>
                    <input type="text" name="name" placeholder="Add task here"/>
                </div>
                <div className="form-control">
                    <label>Day & Time:  </label>
                    <input type="text" name="name" placeholder="Add date and time of the task" />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder:  </label>

                    <input type="checkbox"/>
                    
                </div>
                    <input type="submit" value="Save Task" className="btn btn-block"/>
            </div>
        </form>
    )
}
