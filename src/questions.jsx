import Question from './question';

const Questions = ({ questions, activeId, toggleQue }) => {
    return (
        <section className="container">
            <h1>Questions</h1>
            {questions.map((question) => {
                return <Question 
                            key={question.id}
                            {...question}
                            activeId={activeId}
                            toggleQue={toggleQue}
                        />
            })}
        </section>
    )
}

export default Questions;