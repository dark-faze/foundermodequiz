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
    text: "You find a magic lamp. Do you:",
    options: ["Wish for a stable 401(k) plan", "Wish for a unicorn that poops glitter"],
    founderScore: 1,
  },
  {
    text: "Your computer crashes. Your first reaction is to:",
    options: ["Call IT support", "Invent a new operating system"],
    founderScore: 1,
  },
  {
    text: "You're stranded on a desert island. You build:",
    options: ["A well-organized shelter", "A coconut-powered rocket ship"],
    founderScore: 1,
  },
  {
    text: "Your favorite sandwich is:",
    options: ["Ham and cheese, no crust", "Peanut butter and pickles on a waffle"],
    founderScore: 1,
  },
  {
    text: "You see a 'Keep Off the Grass' sign. You:",
    options: ["Respect the rules and use the sidewalk", "Start a floating grass-walking shoe company"],
    founderScore: 1,
  },
  {
    text: "Your spirit animal is:",
    options: ["A well-organized ant", "A platypus wearing a top hat"],
    founderScore: 1,
  },
  {
    text: "You find $100. You:",
    options: ["Deposit it in your savings account", "Invest in a time machine made of cheese"],
    founderScore: 1,
  },
  {
    text: "Your ideal vacation is:",
    options: ["An all-inclusive resort with scheduled activities", "Bungee jumping into a pool of Jell-O"],
    founderScore: 1,
  },
  {
    text: "You're late for work because:",
    options: ["Traffic was terrible", "You were teaching your cat to speak French"],
    founderScore: 1,
  },
  {
    text: "Your favorite book genre is:",
    options: ["Self-help and personal finance", "Sci-fi cookbooks for intergalactic foodies"],
    founderScore: 1,
  },
  {
    text: "You see a red button labeled 'Do Not Push'. You:",
    options: ["Leave it alone, obviously", "Push it while wearing a banana costume"],
    founderScore: 1,
  },
  {
    text: "Your ideal pet would be:",
    options: ["A well-trained dog", "A domesticated Loch Ness Monster"],
    founderScore: 1,
  },
  {
    text: "You're given a box. Inside is:",
    options: ["Office supplies, neatly organized", "A portal to a dimension made of spaghetti"],
    founderScore: 1,
  },
  {
    text: "Your superpower of choice would be:",
    options: ["The ability to always be on time", "The power to turn anything into a taco"],
    founderScore: 1,
  },
  {
    text: "You describe your fashion sense as:",
    options: ["Professional and understated", "Inspired by a disco ball fighting a rainbow"],
    founderScore: 1,
  },
  {
    text: "Your approach to cooking is:",
    options: ["Following recipes to the letter", "Inventing new flavors like 'surprised elephant'"],
    founderScore: 1,
  },
  {
    text: "You win the lottery. Your first purchase is:",
    options: ["A sensible investment portfolio", "A life-size chocolate statue of yourself"],
    founderScore: 1,
  },
  {
    text: "Your ideal mode of transportation is:",
    options: ["A reliable, fuel-efficient car", "A hovercraft shaped like a giant rubber duck"],
    founderScore: 1,
  },
  {
    text: "You're given a empty room. You fill it with:",
    options: ["Practical furniture and storage solutions", "A ball pit filled with marshmallows"],
    founderScore: 1,
  },
  {
    text: "Your life motto is:",
    options: ["Slow and steady wins the race", "When life gives you lemons, make anti-gravity boots"],
    founderScore: 1,
  },
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
    <div className="h-full w-full flex flex-col items-center justify-center bg-black p-4 font-sans">
      <h1 className="text-5xl font-bold mb-8 text-white text-center">🚀 Founder Mode vs Manager Mode Quiz 🧑‍💼</h1>
      <div className="backdrop-blur-lg bg-gray-900 bg-opacity-70 rounded-xl p-8 shadow-lg w-full max-w-4xl">
        {showResult ? (
          <div className="result space-y-6 text-center">
            <h2 className="text-3xl font-bold text-white">🎉 Quiz Completed! 🎉</h2>
            <p className="text-2xl font-bold text-white">Your score: {score} out of {questions.length}</p>
            <p className="text-2xl font-bold text-white">
              You are in: {score > questions.length / 2 ? "🚀 Founder Mode" : "🧑‍💼 Manager Mode"}
            </p>
            <button onClick={resetQuiz} className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition duration-300 text-xl">
              🔄 Retake Quiz
            </button>
          </div>
        ) : (
          <div className="question-container space-y-6 text-center">
            <h2 className="text-2xl font-bold text-white">Question {currentQuestion + 1} of {questions.length}</h2>
            <p className="text-xl font-bold text-white">{questions[currentQuestion].text}</p>
            <div className="options space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index === 1 ? questions[currentQuestion].founderScore : 0)}
                  className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg hover:bg-gray-700 transition duration-300 text-lg font-bold"
                >
                  {index === 0 ? '🧑‍💼 ' : '🚀 '}{option}
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
