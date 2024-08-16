import React from "react";

function QuestionItem({ question,setQuestionItem,questionList }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(){
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"DELETE",
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res=>{
      if(res.ok){
        questionList.splice(questionList.indexOf(question),1)
        setQuestionItem(questionList)}
    })
    setQuestionItem(questionList.splice(questionList.indexOf(question),1))
  }

  return (
    <li >
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
