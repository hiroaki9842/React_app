import React from 'react'

const TodoList = ({tasklist, setTaskList}) => {
  return (
    <div className="todoList">
      <div className="todos">
        {tasklist.map(task => (
          // <div className="day">
          //   {/* 投稿した日付を表示したい */}
          //   <span>3月13日(仮)</span>
          // </div>
          <div className="todo">
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button>
                <i className="fa-solid fa-check"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
