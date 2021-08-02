import { useEffect, useState } from 'react'


    const TodoItem = ( { task, student, id, deleted, handleUpdate, isCompleted } ) => {

    const [style, setStyle] = useState('')  
    // const [background_color, setBackgroundColor] = useState('') 
    // const [lineThrough, setLineThrough] = useState('')
    // const [fcolor, setFColor] = useState('')

    // useEffect(() =>{
    //     if(!isCompleted){
    //         setColor('white')
    //         setBackgroundColor('#2ea8df')
    //         setLineThrough('none')
    //         setFColor('black')
    //     }else{
    //         setColor('black')
    //         setBackgroundColor('#71EFA3')
    //         setLineThrough('line-through')
    //         setFColor('green')
    //     }
    // }, [isCompleted])
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
            {/* {isCompleted ? setStyle("completed")
            : setStyle("incompleted")} */}
            {/* <div className={style}> */}
                
                <p>Task: {task}</p>
                <p>Student: {student}</p> 


                <div className="buttons">
                    <button  className="delete" onClick={() => { deleted(id) } }></button>
                    <button  className="complete" onClick={() => { handleUpdate(id, {task, student, isCompleted}) }}></button>
                {/* </div> */}
            
            </div>
             

            
        </div>
    )
}

export default TodoItem;