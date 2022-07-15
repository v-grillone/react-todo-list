import React from "react";

function Todo({ todo, completeTask }) {
    function completeClick(e) {
        completeTask(todo.id);
        const btnText = e.target.innerText
        btnText === 'Complete' ? e.target.innerText = 'Uncomplete' : e.target.innerText = 'Complete';
    }
    const { id, title, completed } = todo;
    const h1 = <h1 className="text-2xl w-52">{title.toUpperCase()}</h1>;
    const text = completed ? <strike>{h1}</strike> : h1;
    const btnCompleted = <button className='px-2 border-2 rounded border-slate-500 text-white bg-slate-400 hover:bg-slate-400' onClick={completeClick}>Complete</button> 
    return <div data-testid={`todo-${id}`} className='task flex flex-row'>{text}{btnCompleted}</div>
}

export default Todo;