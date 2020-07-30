import React from "react"

function TodoList(props)
{
     const styles={
          fontColor:"cyan",
          textDecoration: "line-through"
     }
     return(
     <div>
     <input type="checkbox"  
     checked={props.items.completed}  
     onChange={()=>{props.handleChange(props.items.id)}}/>
     <p style={props.items.completed ? styles: null}>{props.items.name}</p>
     <br></br>
     <hr></hr>
     </div>
     )
}
export default TodoList