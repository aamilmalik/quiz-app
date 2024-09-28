import React from "react";

function QuestionList({ questions , handleClick , currentAnswer , currentQueIndex }) {
  return (
    <div>
      <h2>{`Q.${currentQueIndex + 1}) ${questions.question}`}</h2>
      <ul>
        {questions.options.map((option, index) => {
          return <li key={index} onClick={()=>handleClick(option)}
          className={currentAnswer === option ? "selected" : ""}
          >{option}</li>;
        })}
      </ul>
    </div>
  );
}

export default QuestionList;
