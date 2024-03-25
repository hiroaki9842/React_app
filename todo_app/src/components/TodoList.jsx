import React from 'react'

const TodoList = ({tasklist, setTaskList}) => {
  // チェックボタンをクリックしたら削除したい
  const taskDelete = (id) => {
    setTaskList(tasklist.filter((task) => task.id !==id))
  }

  //日付取得
  let d = new Date()
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate()

  console.log(year)
  console.log(month)
  console.log(day)

  return (
    <div className="todoList">
      <div className="todos">
        {tasklist.map((task,index) => (
          // <div className="day">
          //   {/* 投稿した日付を表示したい */}
          //   <span>3月13日(仮)</span>
          // </div>
          <div 
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => taskDelete(task.id)}>
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
