import { useState } from "react";
import Button from "./componants/button/button.jsx";
import Header from "./componants/Header/Header.jsx";
const App = ()=>{
  const questionData= [{
  question: "What does PHP stands for?",
  answer: "Hypertext Preprocessor",
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor",
  ],
},
{
  question: "What does SQL stands for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language",
  ],
},
{
  question: "What year was JavaScript launched?",
  answer: "1995",
  options: ["1996", "1995", "1994", "None of the Above"],
},
{
  question: "What does SQL stands for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language",
  ],
}
]
const [count , setCount] = useState(0)
let [last , setlast] = useState(1)
let [right , setRight] = useState(0)

const Skip = (e)=>{
  if(e === questionData[count].answer){
    setRight((pre)=>pre+1)
  }
  if(last <  questionData.length){
    setlast((pre)=>pre+1)
    setCount((pre)=>pre+1)
   
  }else{

setCount(0)
setlast(1)
setRight(0)
  }
}
return(
<div className="App">
  {
    <Header className='head'/>
  }
  <h1>{right}</h1>
  <h1 className="m">Quiz App</h1>
  <h3 className="m">Questions {last}/{questionData.length}</h3>
<h4 className="m">{questionData[count].question}</h4>
<h5>Right Answer {right}</h5>
{
  questionData[count].options.map((e,i)=>{
    return (<Button className='btn' key={i} onClick={()=>Skip(e)} lable={e}></Button>)
  })
}
<Button className='skip' onClick={Skip} lable={"Skip"}></Button>
</div> 
)
}

export default App;