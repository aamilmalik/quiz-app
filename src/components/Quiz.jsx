import React, { useState } from "react";
import QuestionList from "./QuestionList";

function Quiz() {
  
  const questions = [
    // HTML Questions
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Transfer Markup Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<head>", "<h6>", "<h1>", "<header>"],
      answer: "<h1>",
    },
    {
      question: "What is the correct way to insert an image in HTML?",
      options: [
        '<img href="image.jpg">',
        '<img alt="image.jpg">',
        '<img src="image.jpg">',
        '<image src="image.jpg">',
      ],
      answer: '<img src="image.jpg">',
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["style", "font", "class", "styles"],
      answer: "style",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      answer: "<br>",
    },
  
    // CSS Questions
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-style", "font-size", "text-size", "text-style"],
      answer: "font-size",
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "background-color", "bg-color", "background"],
      answer: "background-color",
    },
    {
      question: "How do you make the text bold in CSS?",
      options: [
        "font-weight: bold",
        "text-decoration: bold",
        "font-style: bold",
        "font-bold: true",
      ],
      answer: "font-weight: bold",
    },
    {
      question: "How do you add a shadow effect to text in CSS?",
      options: ["text-shadow", "shadow-text", "text-outline", "font-shadow"],
      answer: "text-shadow",
    },


  ];

  
  const [currentQueIndex, setCurrentQueIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const nextQue = () => {
    setCurrentQueIndex(currentQueIndex + 1);
    setCurrentAnswer(null)
  };

  const handleClick = (option) => {
    setCurrentAnswer(option);
  
    if(option === questions[currentQueIndex].answer){
      setScore(score + 1)
    }
  };



  return (
    <>
    {
      currentQueIndex < questions.length ?  (
        <div>
        <QuestionList
          questions={questions[currentQueIndex]}
          handleClick={handleClick}
          currentAnswer={currentAnswer}
          currentQueIndex={currentQueIndex}
        />
        <button onClick={nextQue} disabled={currentAnswer === null}>Next Question</button>
      </div>
      ): (
        <h2>Your Score is : {score}</h2>
      )
    }
      
    </>
  );
}

export default Quiz;
