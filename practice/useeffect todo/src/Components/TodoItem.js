export const TodoItem = ({todo})=>{

    return <div> 
    
    {todo.title} - {todo.status ? "Done" : "Not Done"}
    <button>Toogle</button>
    </div>
}