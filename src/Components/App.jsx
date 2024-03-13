import React from "react";
import QuizHomePage from "./QuizApp/QuizHomePage";
import { Route,Routes } from "react-router-dom";
import QuizCs from "./CS/QuizCs";
import QuizHistory from "./History/QuizHistory";
import QuizGk from "./GK/QuizGk";
import QuizEnglish from "./English/QuizEnglish";

const App=()=>{
    return(
        <>
        {/* <QuizHomePage/> */}
        <Routes>
            <Route path="/" Component={()=><QuizHomePage/>}/>
            <Route path="/quizcs" Component={()=>< QuizCs/>}/>
            <Route path="/quizhistory" Component={()=>< QuizHistory/>}/>
            <Route path="/quizgk" Component={()=>< QuizGk/>}/>
            <Route path="/quizenglish" Component={()=>< QuizEnglish/>}/>
        </Routes>
        </>
    )
}

export default App;