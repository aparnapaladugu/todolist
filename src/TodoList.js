import React from 'react'

function TodoList({todolist,deleteHandler}) {
  return (
    <div>
       {todolist.map((todo,index) =>
        <div key={index}>
            <h3>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h3>
        </div>)}
    </div>
  )
}

export default TodoList


















// import React from 'react'

// const TodoList = ({todolist,deleteHandler}) => {
//     return (
//         <div>
//             {todolist.map((todo,index) =>
//             <div key={index}>
//                 <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button></h5>
//             </div>)}
//         </div>
//     )
// }

// export default TodoList