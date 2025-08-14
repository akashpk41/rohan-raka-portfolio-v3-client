import React, { useState, useEffect } from 'react';

const QuizSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('nursing');
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Quiz Categories
  const quizCategories = {
    nursing: {
      name: 'Nursing Fundamentals',
      icon: '🩺',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      description: 'Test your nursing knowledge and patient care skills',
      difficulty: 'Intermediate'
    },
    anatomy: {
      name: 'Human Anatomy',
      icon: '🫁',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      description: 'Challenge your understanding of human body systems',
      difficulty: 'Advanced'
    },
    pharmacy: {
      name: 'Pharmacology',
      icon: '💊',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/20',
      description: 'Test your medication and drug interaction knowledge',
      difficulty: 'Expert'
    },
    emergency: {
      name: 'Emergency Care',
      icon: '🚑',
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-500/20 to-orange-500/20',
      description: 'Assess your emergency response and first aid skills',
      difficulty: 'Professional'
    }
  };

  // Medical Quiz Questions Database
  const quizQuestions = {
    nursing: [
      {
        id: 1,
        question: "What is the normal resting heart rate for a healthy adult?",
        options: ["40-60 BPM", "60-100 BPM", "100-120 BPM", "120-140 BPM"],
        correctAnswer: 1,
        explanation: "The normal resting heart rate for adults ranges from 60 to 100 beats per minute.",
        points: 10,
        difficulty: "Easy"
      },
      {
        id: 2,
        question: "Which vital sign is considered the 'fifth vital sign' in pain assessment?",
        options: ["Temperature", "Blood Pressure", "Pain Level", "Oxygen Saturation"],
        correctAnswer: 2,
        explanation: "Pain level is often referred to as the 'fifth vital sign' and should be assessed regularly.",
        points: 15,
        difficulty: "Medium"
      },
      {
        id: 3,
        question: "What is the correct order for donning PPE (Personal Protective Equipment)?",
        options: [
          "Gloves, Gown, Mask, Goggles",
          "Gown, Mask, Goggles, Gloves",
          "Mask, Gown, Goggles, Gloves",
          "Goggles, Mask, Gown, Gloves"
        ],
        correctAnswer: 1,
        explanation: "The correct order is: Hand hygiene, Gown, Mask/Respirator, Eye protection, Gloves.",
        points: 20,
        difficulty: "Hard"
      },
      {
        id: 4,
        question: "What does the acronym SBAR stand for in nursing communication?",
        options: [
          "Situation, Background, Assessment, Recommendation",
          "Symptoms, Baseline, Analysis, Report",
          "Safety, Behavior, Action, Response",
          "Status, Brief, Acute, Recovery"
        ],
        correctAnswer: 0,
        explanation: "SBAR stands for Situation, Background, Assessment, and Recommendation - a communication framework.",
        points: 15,
        difficulty: "Medium"
      },
      {
        id: 5,
        question: "Which position is most appropriate for a patient experiencing respiratory distress?",
        options: ["Supine", "Prone", "High Fowler's", "Trendelenburg"],
        correctAnswer: 2,
        explanation: "High Fowler's position (45-90° head elevation) facilitates breathing and reduces respiratory distress.",
        points: 20,
        difficulty: "Hard"
      }
    ],
    anatomy: [
      {
        id: 6,
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "The human heart has four chambers: two atria and two ventricles.",
        points: 10,
        difficulty: "Easy"
      },
      {
        id: 7,
        question: "Which organ produces insulin in the human body?",
        options: ["Liver", "Pancreas", "Kidney", "Spleen"],
        correctAnswer: 1,
        explanation: "The pancreas produces insulin, which regulates blood glucose levels.",
        points: 15,
        difficulty: "Medium"
      }
    ],
    pharmacy: [
      {
        id: 8,
        question: "What does the abbreviation 'PRN' mean in medication administration?",
        options: ["Twice daily", "As needed", "Before meals", "At bedtime"],
        correctAnswer: 1,
        explanation: "PRN means 'pro re nata' (as needed) - medication given when required.",
        points: 15,
        difficulty: "Medium"
      }
    ],
    emergency: [
      {
        id: 9,
        question: "What is the correct chest compression depth for adult CPR?",
        options: ["1-2 inches", "2-2.4 inches", "3-4 inches", "4-5 inches"],
        correctAnswer: 1,
        explanation: "For adult CPR, chest compressions should be 2-2.4 inches (5-6 cm) deep.",
        points: 20,
        difficulty: "Hard"
      }
    ]
  };

  const currentQuestions = quizQuestions[selectedCategory] || [];
  const currentCategoryData = quizCategories[selectedCategory];

  // Timer countdown
  useEffect(() => {
    let interval;
    if (quizStarted && !quizCompleted && !showResult && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, quizCompleted, showResult, timeLeft]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setTimeLeft(30);
    setStreak(0);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answerIndex === currentQuestions[currentQuestion].correctAnswer;
    const newAnswer = {
      questionId: currentQuestions[currentQuestion].id,
      selectedAnswer: answerIndex,
      isCorrect,
      points: isCorrect ? currentQuestions[currentQuestion].points : 0,
      timeSpent: 30 - timeLeft
    };

    setAnswers(prev => [...prev, newAnswer]);

    if (isCorrect) {
      setScore(prev => prev + currentQuestions[currentQuestion].points);
      setStreak(prev => {
        const newStreak = prev + 1;
        setBestStreak(current => Math.max(current, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }

    // Auto advance after 3 seconds
    setTimeout(() => {
      nextQuestion();
    }, 3000);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(30);
    } else {
      completeQuiz();
    }
  };

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      setSelectedAnswer(-1);
      setShowResult(true);
      setAnswers(prev => [...prev, {
        questionId: currentQuestions[currentQuestion].id,
        selectedAnswer: -1,
        isCorrect: false,
        points: 0,
        timeSpent: 30
      }]);
      setStreak(0);
      setTimeout(nextQuestion, 2000);
    }
  };

  const completeQuiz = () => {
    setQuizCompleted(true);
    setQuizStarted(false);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setTimeLeft(30);
    setStreak(0);
  };

  const getScoreGrade = () => {
    const percentage = (score / (currentQuestions.reduce((sum, q) => sum + q.points, 0))) * 100;
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-400', message: 'Outstanding! 🏆' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-300', message: 'Excellent! 🌟' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-400', message: 'Good Job! 👏' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-400', message: 'Not Bad! 📚' };
    return { grade: 'F', color: 'text-red-400', message: 'Keep Learning! 💪' };
  };

  const scoreData = getScoreGrade();
  const maxScore = currentQuestions.reduce((sum, q) => sum + q.points, 0);
  const progressPercentage = ((currentQuestion + 1) / currentQuestions.length) * 100;

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Quiz Elements Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            {i % 5 === 0 && <div className="text-2xl">🧠</div>}
            {i % 5 === 1 && <div className="text-xl">📚</div>}
            {i % 5 === 2 && <div className="text-lg">💡</div>}
            {i % 5 === 3 && <div className="w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />}
            {i % 5 === 4 && <div className="w-3 h-3 border-2 border-pink-400/50 rounded-full" />}
          </div>
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-purple-900/10 to-black/30 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-60 animate-pulse" />
              <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-3xl">🎮</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Test Your Health IQ
            </h2>
          </div>
          <div className="w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Challenge your medical knowledge with our gamified quiz system designed for healthcare professionals
          </p>
        </div>

        {/* Quiz Interface */}
        {!quizStarted && !quizCompleted && (
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

            {/* Category Selection */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Object.entries(quizCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === key
                      ? `bg-gradient-to-br ${category.bgColor} border-white/30 shadow-2xl`
                      : 'bg-white/5 border-white/20 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className={`font-bold text-lg ${selectedCategory === key ? 'text-white' : 'text-gray-300'}`}>
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedCategory === key
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      {category.difficulty}
                    </div>
                  </div>

                  {selectedCategory === key && (
                    <div className="absolute top-3 right-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Start Quiz Button */}
            <div className="text-center">
              <button
                onClick={startQuiz}
                className={`group relative px-12 py-6 bg-gradient-to-r ${currentCategoryData.color} rounded-3xl font-bold text-white text-xl shadow-2xl transform hover:scale-110 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${currentCategoryData.color.split(' ').reverse().join(' ')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <span className="relative flex items-center gap-3">
                  <span className="text-2xl">{currentCategoryData.icon}</span>
                  Start {currentCategoryData.name} Quiz
                  <span className="text-2xl">🚀</span>
                </span>
              </button>

              <div className="mt-4 text-gray-400">
                <p>{currentQuestions.length} Questions • {maxScore} Total Points</p>
              </div>
            </div>
          </div>
        )}

        {/* Active Quiz */}
        {quizStarted && !quizCompleted && (
          <div className="max-w-4xl mx-auto">

            {/* Quiz Progress & Timer */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-gray-300">
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-gray-300">Score: <span className="text-white font-bold">{score}</span></div>
                  <div className="text-gray-300">Streak: <span className={`font-bold ${streak > 0 ? 'text-green-400' : 'text-gray-400'}`}>🔥{streak}</span></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${currentCategoryData.color} transition-all duration-500 rounded-full`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              {/* Timer */}
              <div className="mt-4 flex justify-center">
                <div className={`px-6 py-3 rounded-2xl border-2 ${timeLeft <= 10 ? 'border-red-500 bg-red-500/20 text-red-300' : 'border-white/20 bg-white/10 text-white'} transition-all duration-300`}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⏱️</span>
                    <span className="text-xl font-bold">{timeLeft}s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Card */}
            <div className={`relative backdrop-blur-2xl bg-gradient-to-br ${currentCategoryData.bgColor} border border-white/20 rounded-3xl p-8 shadow-2xl mb-8`}>

              {/* Question */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentCategoryData.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold">{currentQuestion + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-relaxed">
                      {currentQuestions[currentQuestion]?.question}
                    </h3>
                    <div className="flex items-center gap-3 mt-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${currentCategoryData.color} text-white text-sm rounded-full font-medium`}>
                        {currentQuestions[currentQuestion]?.difficulty}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {currentQuestions[currentQuestion]?.points} points
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Answer Options */}
              <div className="space-y-4">
                {currentQuestions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                      showResult
                        ? index === currentQuestions[currentQuestion].correctAnswer
                          ? 'bg-green-500/20 border-green-500 text-green-300'
                          : selectedAnswer === index
                          ? 'bg-red-500/20 border-red-500 text-red-300'
                          : 'bg-white/5 border-white/20 text-gray-400'
                        : selectedAnswer === index
                        ? `bg-gradient-to-r ${currentCategoryData.color}/20 border-white/40 text-white`
                        : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        showResult && index === currentQuestions[currentQuestion].correctAnswer
                          ? 'border-green-500 bg-green-500 text-white'
                          : showResult && selectedAnswer === index
                          ? 'border-red-500 bg-red-500 text-white'
                          : selectedAnswer === index
                          ? 'border-white bg-white text-gray-900'
                          : 'border-gray-400'
                      }`}>
                        {showResult && index === currentQuestions[currentQuestion].correctAnswer && '✓'}
                        {showResult && selectedAnswer === index && index !== currentQuestions[currentQuestion].correctAnswer && '✗'}
                        {!showResult && String.fromCharCode(65 + index)}
                      </div>
                      <span className="font-medium text-lg">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Result Explanation */}
              {showResult && (
                <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Explanation:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {currentQuestions[currentQuestion]?.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quiz Completed */}
        {quizCompleted && (
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>

            {/* Results Card */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl mb-8">

              {/* Confetti Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: '1s'
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-4xl font-black text-white mb-4">Quiz Completed!</h3>

                {/* Score Display */}
                <div className="mb-8">
                  <div className="text-8xl font-black mb-4">
                    <span className={scoreData.color}>{scoreData.grade}</span>
                  </div>
                  <div className="text-3xl text-white font-bold mb-2">
                    {score} / {maxScore} Points
                  </div>
                  <div className="text-xl text-gray-300 mb-4">
                    {Math.round((score / maxScore) * 100)}% Correct
                  </div>
                  <div className="text-2xl">{scoreData.message}</div>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-xl font-bold text-white">
                      {answers.filter(a => a.isCorrect).length}/{answers.length}
                    </div>
                    <div className="text-gray-400">Correct Answers</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <div className="text-2xl mb-2">🔥</div>
                    <div className="text-xl font-bold text-white">{bestStreak}</div>
                    <div className="text-gray-400">Best Streak</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-2xl">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="text-xl font-bold text-white">
                      {Math.round(answers.reduce((sum, a) => sum + a.timeSpent, 0) / answers.length)}s
                    </div>
                    <div className="text-gray-400">Avg. Time</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className={`px-8 py-4 bg-gradient-to-r ${currentCategoryData.color} rounded-2xl font-bold text-white shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Retake Quiz
                  </button>
                  <button
                    onClick={() => setSelectedCategory(Object.keys(quizCategories)[0])}
                    className="px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
                  >
                    Try Different Category
                  </button>
                </div>

                {/* Certificate Message */}
                {scoreData.grade === 'A+' && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl">
                    <div className="text-2xl mb-2">🏆</div>
                    <h4 className="text-yellow-300 font-bold text-lg mb-2">Outstanding Performance!</h4>
                    <p className="text-yellow-200">
                      You've earned a digital certificate for excellence in {currentCategoryData.name}!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.7;
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default QuizSection;