import React from 'react'
import Initial from './content/initial';
import Questions from './component/questions';
import Buttoninitial from './component/Buttoninitial';
import Buttonquizz from './component/Buttonquizz';
import Quizz from './content/quizz';
import { nanoid } from 'nanoid';

export default function App(){

    const[isHeld, setIsHeld] = React.useState(false)

    const initial_styles={
        display: isHeld ? "block" : "none"
    }
    const quizz_styles={
        display: isHeld ? "none" : "block"
    }

    function startQuizz(){
        setIsHeld(prevState => !prevState)
    }


    const[allQuestions, setAllQuestions] = React.useState([])

    React.useEffect(() =>{
        fetch('https://opentdb.com/api.php?amount=4&type=multiple')
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))

    },[])





    return(
        <div className='page'>
            <img className='bkg_blue' src='./images/blob_blue.png' alt='blue mark'/>
            <div 
                className='initial_content'
                style={initial_styles}
            >    
                <Initial />
                <Buttoninitial handleClick={startQuizz}/>
            </div>

            <div 
                className='quizz_content'
                style={quizz_styles}
            >  
                <div>
                    <Questions />
                    <Questions />
                    <Questions />
                    <Questions />
                </div>
                <Buttonquizz handleClick={startQuizz}/>  
            </div>

            <div>
                <Quizz 
                    key={nanoid()}
                    question                
                
                
                />
            </div>

            <img className='bkg_yellow' src='./images/blob_yellow.png' alt='yelow mark' />
        </div>
    )

}