import React, {useState} from 'react'

// propsとして親からデータを受け取る
const InputForm = ({tasklist, setTaskList}) => {

  const[inputText,setInputText] = useState("")

  const addSubmit = (e) => {
    e.preventDefault()
    if (inputText === "") {
      return
    }

    // タスクを追加する
    setTaskList([
      ...tasklist,
      {
        id:tasklist.length,
        text:inputText,
        completed: false
      }
    ])
    setInputText("")
  }

  const addChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div className = "inputForm">
      <form onSubmit={addSubmit}>
        <input type="text" onChange={addChange} value={inputText}/>
        <button onClick={addSubmit}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}

export default InputForm