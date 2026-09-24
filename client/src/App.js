import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import AddPrompt from './components/AddPrompt'
import PromptList from './components/PromptList'
import './App.css'
function App() {
  const [prompts, setPrompts] = useState([])
  const fetchPrompts = async () => {
    const response = await axios.get('http://localhost:5000/api/prompts')
    setPrompts(response.data)
  }
  useEffect(() => {
    fetchPrompts()
  }, [])
  const deletePrompt = async (id) => {
    await axios.delete(`http://localhost:5000/api/prompts/${id}`)
    fetchPrompts()
  }
  const likePrompt = async (id) => {
    await axios.put(`http://localhost:5000/api/prompts/like/${id}`)
    fetchPrompts()
  }
  return (
    <div className="container">
      <Navbar />
      <AddPrompt fetchPrompts={fetchPrompts} />
      <PromptList
        prompts={prompts}
        deletePrompt={deletePrompt}
        likePrompt={likePrompt}
      />
    </div>
  )
} export default App 
