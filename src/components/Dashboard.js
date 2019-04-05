import React from 'react'

const Dashboard = props => (
<div>
    <H5>Here are your todos</H5>
<div>
{
    props.todos.map(todo => (
    <p key={todo.id}>
    <span onClick={() => props.handleRemove(todo.id)}>X</span>&nbsp;{todo.text}
    </p>
    ))
    }
</div>
<form onSubmit={props.handleSubmit}>
    <input name="text"
    value={props.text}
    onChange={props.handleChange}
    />
    <button> Add todo </button>
</form>
</div>
)

export default Dashboard 