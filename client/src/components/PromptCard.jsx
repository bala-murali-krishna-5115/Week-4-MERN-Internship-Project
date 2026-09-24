function PromptCard({ prompt, deletePrompt, likePrompt }) {
    return (
        <div className="card">
            <h3>{prompt.title}</h3>
            <p><strong>Category:</strong> {prompt.category}</p>
            <p>{prompt.description}</p>
            <div className="prompt-box">
                {prompt.promptText}
            </div>
            <p>Likes: {prompt.likes}</p>
            <button onClick={() => likePrompt(prompt._id)}>
                Like
            </button>
            <button onClick={() => deletePrompt(prompt._id)}>
                Delete
            </button>
        </div>
    )
} export default PromptCard