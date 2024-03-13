import React from 'react'
import "./QuizHomePage.css";
import { NavLink } from 'react-router-dom';

const QuizHomePage = () => {
  return (
    <div className='home-wrapper'>
      <div className='h-container'>
        <NavLink to={"/quizcs"}>Computer Science</NavLink>
        <NavLink to={"/quizenglish"}>English</NavLink>
        <NavLink to={"/quizhistory"}>History</NavLink>
        <NavLink to={"/quizgk"}>GK</NavLink>
      </div>
    </div>
  ) 
}

export default QuizHomePage
