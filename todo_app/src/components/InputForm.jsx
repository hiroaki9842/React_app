import React, {useState} from 'react'

// propsとして親からデータを受け取る
const InputForm = ({tasklist, setTaskList}) => {

  const[inputText,setInputText] = useState("")

  const addSubmit = (e) => {
    e.preventDefault()

    // タスクを追加する
    setTaskList([
      ...tasklist,
      {
        text:inputText
      }
    ])
    console.log(tasklist)
  }

  const addChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div className = "inputForm">
      <form onSubmit={addSubmit}>
        <input type="text" onChange={addChange}/>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}

export default InputForm