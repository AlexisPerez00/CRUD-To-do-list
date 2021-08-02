const CreateTodo = ( { handleSubmit, register, newTask} ) => {

   
    return(
        <div className="formulario">
            <form onSubmit={handleSubmit((newTask))}>
                <div>
                   <input placeholder="Student Name" {...register("student", {
                       required: true
                   })}/> 
                </div>
                <div>
                    <input placeholder="Task" {...register("task", {
                        required: true
                    })}/> 
                </div>
                <button>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTodo;