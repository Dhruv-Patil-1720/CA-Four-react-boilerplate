
import React,{useEffect,useState} from 'react';
import questions from '../questions';
import "./QuestionBox.css"
import Result from './Result';


export default function QuestionBox() {
 const [currntQuestion, setCurrentQuestion] = useState(0)
 const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
 const [showScore, setShowScore] = useState(false)
 const [score, setScore] = useState(0)
 const [isHighlighted, setIsHighlighted] = useState(false);

 useEffect(() => {
  if (dark) {
    setThemeName('Dark Mode');
    document.body.style.backgroundColor = 'black';
    document.querySelector('.heading').style.color = 'white';
  } else {
    setThemeName('Light Mode');
    document.body.style.backgroundColor = '#FAF0D7';
    document.querySelector('.heading').style.color = 'black';
  }
}, [dark]);

const handleClick = ()=>{
  setTheme(!dark);
}
const handleHighlight = () => {
  setIsHighlighted(!isHighlighted);
};
 const handleAnswerButtonClick = (isCorrect) => {
   if (isCorrect === true) {
     setScore(score + 1);
   }


   const nextQuestions = currntQuestion + 1;
  
   if (nextQuestions < questions.length) {
     setCurrentQuestion(nextQuestions);
   }
   else {
     setShowScore(true)
   }
   
 }
 return (
   <> 
    <div className='header'>
    <div className='logo'>

   </div>
   <div className='heading'>
    <h1>Quiz Blitz</h1>
   </div>
    <div className='mode-buttons' >
             <button className='buttn' onClick={handleClick}>{themeName}</button>
           </div>
    </div>
   
   <div className='main-conatiner' >
     <div className="main-app">
       {showScore ? (
         <div className='score-section'>
         
         </div>
       ) :
         (
           <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currntQuestion + 1}/{questions.length}</span>
                   </div>
                <div className='question-text'>
               <h1 className='question'>{questions[currntQuestion].text}</h1>
                 </div>
                 </div>


             <div className='answer-section'>
             { questions[currntQuestion].options.map((option) => (
               <button onClick={() => handleAnswerButtonClick(option.isCorrect)}>
                 {option.text} </button>
 ))
}
             </div>
             <div className='higlight-button'>
             <button className="buttn1" onClick={handleHighlight}>Higlight</button>
             <button className="buttn2" onClick={handleHighlight}>Remove highlight</button>
             </div>
           </>
         )}
     </div>
     </div>
     
   </>
 );
}
