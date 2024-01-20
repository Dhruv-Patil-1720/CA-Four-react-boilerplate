
import React,{useEffect,useState} from 'react'; // Importing necessary React components and modules
import questions from '../questions'; // Importing question data
import "./QuestionBox.css" // Importing CSS styles
import Result from './Result';

// Defining the QuestionBox component
export default function QuestionBox() {
 const [currntQuestion, setCurrntQuestion] = useState(0)
 const [dark, setTheme] = useState(true);
 const [themeName, setThemeName] = useState("dark");
 const [showScore, setShowScore] = useState(false)
 const [score, setScore] = useState(0);
 const [Highlight, setHighlight] = useState(false);

    // State variables to manage quiz data and functionality
  
 useEffect(() => {   // UseEffect to apply theme settings 
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

// Function to toggle the theme
const handleClick = ()=>{ 
  setTheme(!dark);
}
 // Style for highlighted text
 const HighlightStyle={
    color: Highlight? "red":" ",
  }
  // Function to handle answer button clicks
  const handelOptnClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestions = currntQuestion + 1;

    if (nextQuestions < questions.length) {
      setCurrntQuestion(nextQuestions);
    } else {
      setShowScore(true);
    }
  };
  // Restart the quiz by resetting state variables
  const restart = () => {
    setCurrntQuestion(0);
    setScore(0);
    setShowScore(false);
    
  };
 return (
   // Main structure of the component
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
             <Result score={score}
             questionsLength={questions.length}
            onRestartQuiz={restart} />
         </div>
       ) :
         (
           <>  
              <div className='question-section'>
                {/* questions count box */}
                <div className='question-count'>
                  <span>Question {currntQuestion + 1}/{questions.length}</span>
                   </div>
                   {/* question */}
                <div className='question-text'>
               <h1 className='question'style={HighlightStyle}>{questions[currntQuestion].text}</h1>
                 </div>
                 </div>
             <div className='answer-section'>
             { questions[currntQuestion].options.map((option) => (
              //options buttons//
               <button onClick={() => handelOptnClick(option.isCorrect)}>
                 {option.text} </button>))}
             </div>
                {/* highlight buttons */}
             <div className='higlight-button'>
             <button className='highlightbtn'  onClick={()=>setHighlight(true)}>Higlight</button>
             <button className='highlightbtn'  onClick={()=>setHighlight(false)}>Remove Highlight</button>
             </div>
           </>
         )}
     </div>
     </div>
     
   </>
 );
}
