const TodoList =({todo})=>{
    return (
        <div>
        {
            todo.map((el)=>{
                return (
                <div key={el.id}>
                    <h4>{el.title}</h4>
                    <p>{el.status}</p>
                    <p>{el.status?'completed':'Active'}</p>
                    </div>
            )})}
    </div>
    )
}


const Todo = ()=>{
const [text,setText]= React.useState('')
const[todo,setTodo]= React.useState([{id:1,title:'Todo 1', status:false}])

const handleChange=(e)=>{
    let val = e.target.value;
    setText(val)
    
}
const handleClick=()=>{
    const obj={
        id: todo.length+1,
        title:text,
        status:false

    }
    setTodo([...todo,obj])
    setText('')
}
console.log(todo)

    return (
        <div>
            <h1>TOdo</h1>
            <input type='text' placeholder='Enter todo' onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        
       <div>
        <TodoList todo={todo} />
       </div>
        
        
        </div>
    )
}

let APP= ()=>{
    return (
        <div>
            <Todo/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<APP/>)