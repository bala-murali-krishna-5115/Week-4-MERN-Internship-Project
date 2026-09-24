import PromptCard from './PromptCard'
function PromptList({ prompts, deletePrompt, likePrompt }) {
    return (
        <div>
            {
                prompts.map((prompt) => (
                    <PromptCard
                        key={prompt._id}
                        prompt={prompt}
                        deletePrompt={deletePrompt}
                        likePrompt={likePrompt}
                    />
                ))}
        </div>
    )
} export default PromptList