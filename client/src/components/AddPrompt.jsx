import { useState } from 'react'
import axios from 'axios'
function AddPrompt({ fetchPrompts }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        promptText: ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api/prompts', formData)
        fetchPrompts()
        setFormData({
            title: '',
            category: '',
            description: '',
            promptText: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Prompt Title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Prompt Description"
                value={formData.description}
                onChange={handleChange}
            />
            <textarea
                name="promptText"
                placeholder="Enter AI Prompt"
                value={formData.promptText}
                onChange={handleChange}
            />
            <button type="submit">Add Prompt</button>
        </form>
    )
} export default AddPrompt     