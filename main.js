const TodoList =({todo,handleDelete,handleCheck})=>{
    return (
        <div className='showDiv'> 
        {
            todo.map((el)=>{
                return (
                <div className='inDiv' key={el.id} style={{backgroundColor:el.checkBox?'lightgreen':'lightGray'}}>
                    <h4>{el.title}</h4>
                    <p>{el.checkBox}</p>
                   <lable>Done :
                    <input type='checkbox' onChange={()=>handleCheck(el.id)} />
                   </lable>
                    {/* <button o={()=>handleDelete(el.id)}>Delete</button> */}
                    <button  onClick={()=>handleDelete(el.id)}>Delete</button>
                    </div>
            )})}
    </div>
    )
}


const Todo = ()=>{
const [text,setText]= React.useState('')
const[todo,setTodo]= React.useState([{id:1,title:'Todo 1', checkBox:false},])

const handleChange=(e)=>{
    let val = e.target.value;
    setText(val)
    
}
const handleClick=()=>{
    const obj={
        id: todo.length+1,
        title:text,
        checkBox:false

    }
    setTodo([...todo,obj])
    setText('')
}

// const handleTo =()=>{
// }

const handleDelete=(id)=>{
    const filteredData = todo.filter((el)=>el.id != id); 
    setTodo(filteredData)
}

const handleCheck=(id)=>{
    const checkB=todo.map((el)=>
        el.id == id ? { ...el,checkBox :!el.checkBox}: el 
 );
 setTodo(checkB)

    // if(id==false){
    //     id=true
    //     console.log('tr')
    //     setTodo(id)
    // }
    // else{
    //     id= false
    //     console.log('fal')
    //     // setTodo(id)
    // }

}
// console.log(todo) 

    return (
        <div>
            <h1>Todo</h1>
            <input type='text' placeholder='Enter todo' onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        
       <div>
        <TodoList todo={todo} handleDelete={handleDelete} handleCheck={handleCheck} />
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