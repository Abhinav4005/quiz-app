import React, { useState } from 'react';
import englishQuestion from "../../utils/english.js";
import QuizResult from '../QuizApp/QuizResult.jsx';
import "../CS/Quiz.css";
import { NavLink } from 'react-router-dom';

const QuizEnglish = () => {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [correctAnswer,setCorrectAnswer] = useState(0);
    const [showResult,setShowResult] = useState(false);
    const [clicked,setClicked] =useState(false);
    const [score,setScore] =useState(0);

    const handleNextOptions =()=>{
        setClicked(false);
        const nextQuestion = currentQuestion+1;
        if(nextQuestion<englishQuestion.length){
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowResult(true);
        }
    };

    const handlePlayAgain =()=>{
        setCurrentQuestion(0);
        setScore(0);
        setCorrectAnswer(0);
        setShowResult(false);
    }

    const handleAnswer=(isCorrect)=>{
        if(isCorrect){
            setScore(score+5);
            setCorrectAnswer(correctAnswer+1);
        }
        setClicked(true);
    }
  return (
    <div className='app'>
        {showResult?(<QuizResult score={score} correctAnswer={correctAnswer} handlePlayAgain={handlePlayAgain}/>):(
      <>
      <div className='question-section'>
        <h5>Score:{score}</h5>
        <div className='question-count'>
            <span>{currentQuestion+1} of {englishQuestion.length}</span>
        </div>
        <div className='question-text'>
            {englishQuestion[currentQuestion].ques}
         </div>
         <div className='custom-back'><NavLink to={"/"}>Back</NavLink></div>
      </div>
      <div className='answer-section'>
        {   englishQuestion[currentQuestion].answeroption.map((ans,i)=>{
            return <button className={`button ${clicked && ans.isCorrect?"correct":"button"}`}
                disabled={clicked} 
                key={i} onClick={()=>handleAnswer(ans.isCorrect)}
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

export default QuizEnglish;