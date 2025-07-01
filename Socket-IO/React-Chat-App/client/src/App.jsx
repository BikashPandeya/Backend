
import { useState , useEffect } from "react"
import io from 'socket.io-client'

const socket = io('http://localhost:3000')

const App = () => {
  const [messages, setmessages] = useState([])
  const [messageInput, setmessageInput] = useState('')

  useEffect(() => {
    
    socket.on('message' , (message) => {
      setmessages([...messages , message])
    })
    return () => {
      socket.off('message')
    }
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(messageInput.trim() !== ''){

      socket.emit("message" , messageInput)
      setmessageInput("")
    }
  }
  
  return (
    <div>
      <h1>Simple Chat App using React js</h1>
      <form action="">
        <input type="text" value={messageInput} placeholder="Enter a msg..." onChange={(e) => {setmessageInput(e.target.value)}}/>
        <button onClick={handleSubmit}>Send</button>
      </form>

      <section>
        {messages.map((message , index) => {
          return <p key={index}>{message}</p>
        })}
      </section>
    </div>
  )
}

export default App