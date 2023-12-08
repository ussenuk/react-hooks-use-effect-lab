import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {

  
  const [timeRemaining, setTimeRemaining]= useState(10);
  

  // add useEffect code

  useEffect(()=>{

    // Exit early if countdown is finished
    if (timeRemaining <= 0){
      return (setTimeRemaining(10),onAnswered(false));
    }

    // Set up the timer

    const timeOut = setTimeout(()=>{
      setTimeRemaining((prevTimeRemaining)=> prevTimeRemaining - 1);
    }, 1000);

    // returning a cleanup function to clean up the timer

    return () => clearTimeout(timeOut);

  }, [timeRemaining]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
