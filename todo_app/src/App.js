// propsを用いたボタン作成
// import React from 'react'
// import Button from './Button'


// const App = () => {
//   return (
//     <div>
//       <div>App</div>
//       <Button title='post'/>
//       <Button title='edit'/>
//       <Button title='delete'/>
//       <Button title='submit'/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className='ui container' style={{marginTop:'20px'}}>
      <Counter />
    </div>
  )
}

export default App

