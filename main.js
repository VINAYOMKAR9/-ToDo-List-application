const Todo = ()=>{
const [text,setText]= React.useState('')
const[todo,setTodo]= React.useState([])

const handleChange=(e)=>{
    let val = e.target.value;
    setText(val)
    
}
const handleClick=()=>{
    console.log(text)

}

    return (
        <div>
            <h1>TOdo</h1>
            <input type='text' placeholder='Enter todo' onChange={handleChange}/>>
        <button onClick={handleClick}>Add</button>
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