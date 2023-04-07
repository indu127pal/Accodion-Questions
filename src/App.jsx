import { useState } from 'react';
import data from './data';
import Questions from './questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  
  const toggleQue = (id) => {
    const newId = id === activeId ? null : id;
    setActiveId(newId);
  }

  return <main>
    <Questions
      activeId={activeId}
      toggleQue={toggleQue}
      questions={questions}
    />
  </main>;
};
export default App;
