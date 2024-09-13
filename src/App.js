import {useState} from 'react'

import './App.css'

const App = () => {
  const [inputText, setuUserInput] = useState('')
  const [visiableText, setvisiableInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setvisiableInput(inputText)
  }

  const handleTextChange = e => {
    setuUserInput(e.target.value)
  }

  const erroHandler = () => {
    if (/^[a-zA-Z]+$/.test(visiableText)) {
      return <h1 style={{color: 'red'}}>{visiableText}</h1>
    } else if (/^[0-9]+$/.test(visiableText)) {
      return <h1 style={{color: 'green'}}>{visiableText}</h1>
    } else {
      return <h1>{visiableText}</h1>
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '250px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Text Input..."
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {erroHandler()}
    </div>
  )
}

export default App
