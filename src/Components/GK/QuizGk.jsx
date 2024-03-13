import React, { useState } from 'react';
import gkQuestion from "../../utils/gkData"
import QuizResult from '../QuizApp/QuizResult';
import {NavLink} from "react-router-dom"
import "../CS/Quiz.css"

const QuizGk = () => {
  const [currentQuestion,setCurrentQuestion] =useState(0);
  const [correctAnswer,setCorrectAnswer] = useState(0);
  const [showResult,setShowResult] = useState(false);
  const [clicked,setClicked] = useState(false);
  const [score,setScore] = useState(0);

  const handleAnswer =(isCorrect)=>{
    if(isCorrect){
      setScore(score+5);
      setCorrectAnswer(correctAnswer+1);
    }
    setClicked(true);
  }

  const handlePlayAgain= ()=>{
        setScore(0);
        setCorrectAnswer(0);
        setCurrentQuestion(0);
        setShowResult(false);
  }

  const handleNextOptions =()=>{
    setClicked(false);
    const nextQuestion =currentQuestion+1;
    if(nextQuestion<gkQuestion.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowResult(true);
    }
  }
  return (
    <div className='app'>
      {showResult?(<QuizResult score={score} correctAnswer={correctAnswer} handlePlayAgain={handlePlayAgain}/>):(
      <>
      <div className='question-section'>
        <h5>Score :{score}</h5>
        <div className='question-count'>
          <span>{currentQuestion+1} of {gkQuestion.length}</span>
        </div>
        <div className='question-text'>
          {gkQuestion[currentQuestion].ques}
        </div>
        <div className='custom-back'><NavLink to={"/"}>Back</NavLink></div>
      </div>
      <div className='answer-section'>
        {gkQuestion[currentQuestion].ans.map((ans,i)=>{
          return <button className={`button ${clicked && ans.isCorrect? "correct":"button"}`}
          disabled={clicked}
          key={i}
          onClick={()=>handleAnswer(ans.isCorrect)}
          >{ans.answerText}</button>
        })}
        <div className='actions'>
          <button onClick={handlePlayAgain}>Quit</button>
          <button disabled={!clicked} onClick={handleNextOptions}>Next</button>
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default QuizGk
