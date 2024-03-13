import React from "react";
import question from "../../utils/csData";
import { NavLink } from "react-router-dom";

const QuizResult =(props)=>{
    return(
        <>
        <div className="score-section"> 
            <h2>Completed!</h2>
            <h2>Total Score {props.score}/25</h2>
            <h2>Your Correct question {props.correctAnswer} out of {question.length+1} </h2>
            <button onClick={props.handlePlayAgain}>Play Again</button>
            <button style={{margin:"5px"}}><NavLink to={"/"} style={{color:"white", textDecoration:"none", paddingLeft:"1px", margin:"1px"}}>Back</NavLink></button>
        </div>
        </>
    )
}

export default QuizResult;