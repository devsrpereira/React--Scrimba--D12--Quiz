import React from "react";
import { nanoid } from 'nanoid';

export default function Quizz(){

    const[allQuestions, setAllQuestions] = React.useState([])

    React.useEffect(() =>{
        fetch('https://opentdb.com/api.php?amount=4&type=multiple')
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))

    },[])
    
    console.log(allQuestions)
        
    
    
    //     const newArray = data.results.map((el) => ({
        //         id: nanoid(),
            //         question: el.question,
            //         answers: [...el.incorrect_answer, el.correct_answer]
            //         .sort(() => Math.random() - 0.5)
            //         .map((el) => ({
            //           answer: el,
            //           id: nanoid(),
            //           isSelected: false,
            //           isCorrectAnswer: false,
            //     })),
            // }))
            
            
        
            
            
            // console.log(JSON.stringify(allQuestions,null,2))
            

    return(
        <pre className='quizz_data'></pre>
    )
}