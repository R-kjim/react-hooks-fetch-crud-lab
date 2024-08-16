import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionList,setQuestionItem]=useState([])

  useEffect(()=>{
    fetch(" http://localhost:4000/questions")
    .then(res=>res.json())
    .then(data=>setQuestionItem(data))
  },[])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul >{/* display QuestionItem components here after fetching */}
        {questionList.map((question)=>{
        return <QuestionItem question={question} setQuestionItem={setQuestionItem} questionList={questionList}/>})}
      </ul>
    </section>
  );
}

export default QuestionList;
