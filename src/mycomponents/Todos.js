import React from 'react'
import PropTypes from 'prop-types'


export const Todos = (props) => {
    return (
        <div className="container">
        <h3 className="text-center my-3"> Todos List : </h3>
        <div class="row mb-3">
        {props.todos.length===0? <h4>No Todos to display!</h4> :
        props.todos.map((todo)=>{
            return(
                <div class="col-sm-3 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{todo.title}</h5>
                            <p class="card-text">{todo.desc}</p>
                            <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(todo) }}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    </div>

        </div>

)
}
// return <TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/>