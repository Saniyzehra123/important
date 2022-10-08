export const TodoItem = ({todo})=>{
    return(
        <div>
            {todo.title}-{todo.status ? "done" : "not done"}

            <button>Toggle</button>
        </div>
    )
}