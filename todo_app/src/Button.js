import React from 'react'

const Button = (props) => {
  return (
    <button className="ui basic button">
      <i class="icon user" />
        {props.title}
    </button>
  )
}

export default Button
