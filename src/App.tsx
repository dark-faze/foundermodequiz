import { useState, useEffect } from 'react'
import './App.css'
import soyboyCrying from './assets/soyboycrying.jpg'
import chad from './assets/chad.jpg'
import { Question, questionSets } from './data/questionSets'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Choose a random question set and randomize the correct options
    const randomSetIndex = Math.floor(Math.random() * questionSets.length);
    const randomizedQuestions = questionSets[randomSetIndex].map(q => ({
      ...q,
      options: Math.random() < 0.5 ? q.options : q.options.reverse(),
      founderScore: Math.random() < 0.5 ? 0 : 1
    }));
    setQuestions(randomizedQuestions);
  }, []);

  const handleAnswer = (selectedIndex: number) => {
    const currentQ = questions[currentQuestion];
    setScore(score + (selectedIndex === currentQ.founderScore ? 1 : 0));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    // Re-randomize questions on reset
    const randomSetIndex = Math.floor(Math.random() * questionSets.length);
    const randomizedQuestions = questionSets[randomSetIndex].map(q => ({
      ...q,
      options: Math.random() < 0.5 ? q.options : q.options.reverse(),
      founderScore: Math.random() < 0.5 ? 0 : 1
    }));
    setQuestions(randomizedQuestions);
  };

  const isFounderMode = score > questions.length / 2;

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-black font-sans">
      <header className="py-4 sm:py-6 bg-gray-900 border-b border-purple-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 text-center drop-shadow-lg px-4">
          <span className="block sm:inline">🚀 Founder Mode</span>
          <span className="block sm:inline sm:mx-2">or</span>
          <span className="block sm:inline">Manager Mode 🧑‍💼</span>
        </h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="backdrop-blur-xl bg-gray-800 bg-opacity-50 rounded-3xl p-8 shadow-2xl w-full max-w-4xl border border-purple-500 border-opacity-50">
          {showResult ? (
            <div className="result space-y-8 text-center">
              <h2 className="text-4xl font-bold text-purple-400 drop-shadow-lg">🎉 Quiz Completed! 🎉</h2>
              <p className="text-3xl font-bold text-white drop-shadow-md">Your score: {score} out of {questions.length}</p>
              <p className="text-3xl font-bold text-purple-300 drop-shadow-md">
                You are in: {isFounderMode ? "🚀 Founder Mode" : "🧑‍💼 Manager Mode"}
              </p>
              <img 
                src={isFounderMode ? chad : soyboyCrying} 
                alt={isFounderMode ? "Chad" : "Soyboy Crying"}
                className="mx-auto w-64 h-64 object-cover rounded-lg shadow-lg"
              />
              <button onClick={resetQuiz} className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full hover:bg-purple-700 transition duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                🔄 Retake Quiz
              </button>
            </div>
          ) : (
            <div className="question-container space-y-8 text-center">
              <h2 className="text-3xl font-bold text-purple-400 drop-shadow-md">Question {currentQuestion + 1} of {questions.length}</h2>
              <p className="text-2xl font-bold text-white drop-shadow-sm">{questions[currentQuestion].text}</p>
              <div className="options space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full bg-gray-700 text-white py-4 px-6 rounded-xl hover:bg-purple-600 transition duration-300 text-xl font-bold shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="py-4 bg-gray-900 border-t border-purple-500 text-center">
        <a href="https://x.com/akhlas_hussain" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition duration-300 font-semibold">
          Follow me on X @akhlas_hussain
        </a>
      </footer>
    </div>
  )
}

export default App
