import React from 'react'

const TodoList = () => {
  return (
    <div className="todoList">
      <div className="todos">
        <div className="day">
          {/* 投稿した日付を表示したい */}
          <span>3月13日(仮)</span>
        </div>
        <div className="todo">
          <div className="todoText">
            <span></span>
          </div>
          <div className="icons">
            <button>
              <i class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
