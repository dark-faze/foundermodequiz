import { useState } from 'react'
import './App.css'

// Define the Question type
type Question = {
  text: string;
  options: string[];
  founderScore: number;
}

// Define the quiz questions
const questions: Question[] = [
  {
    text: "How do you approach problem-solving?",
    options: ["Methodically with established processes", "Creatively, often breaking rules"],
    founderScore: 1,
  },
  {
    text: "How comfortable are you with uncertainty?",
    options: ["I prefer stability and predictability", "I thrive in uncertain environments"],
    founderScore: 1,
  },
  // Add 18 more questions here...
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (founderScore: number) => {
    setScore(score + founderScore);
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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-indigo-600 p-4">
      <div className="quiz-container backdrop-blur-lg bg-white bg-opacity-20 rounded-xl p-8 shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-white">Founder Mode vs Manager Mode Quiz</h1>
        {showResult ? (
          <div className="result space-y-4">
            <h2 className="text-2xl font-semibold text-white">Quiz Completed!</h2>
            <p className="text-xl text-white">Your score: {score} out of {questions.length}</p>
            <p className="text-xl font-semibold text-white">You are in: {score > questions.length / 2 ? "Founder Mode" : "Manager Mode"}</p>
            <button onClick={resetQuiz} className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300">
              Retake Quiz
            </button>
          </div>
        ) : (
          <div className="question-container space-y-4">
            <h2 className="text-xl font-semibold text-white">Question {currentQuestion + 1} of {questions.length}</h2>
            <p className="text-lg text-white">{questions[currentQuestion].text}</p>
            <div className="options space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index === 1 ? questions[currentQuestion].founderScore : 0)}
                  className="w-full bg-white bg-opacity-30 text-white py-3 px-6 rounded-lg hover:bg-opacity-40 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
