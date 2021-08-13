import { useEffect, useState } from 'react'


    const TodoItem = ( { task, student, id, deleted, handleUpdate, isCompleted } ) => {

    const [style, setStyle] = useState('')  

    useEffect(() => {
        if(isCompleted) {
            setStyle("completed")
        }
        else {
            setStyle("incompleted")
        }
    },[isCompleted])

    return (
        <div className={style}>

                
                <p>Task: {task}</p>
                <p>Student: {student}</p> 


                <div className="buttons">
                    <button  className="delete" onClick={() => { deleted(id) } }></button>
                    <button  className="complete" onClick={() => { handleUpdate(id, {task, student, isCompleted}) }}></button>
            
            </div>
             

            
        </div>
    )
}

export default TodoItem;