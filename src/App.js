import React from 'react'
import Initial from './content/initial';
import Button from './component/button';

export default function App(){

    return(
        <div className='page'>
            <img className='bkg_blue' src='./images/blob_blue.png' alt='blue mark'/>
            <div className='content'>    
                <Initial />
                <Button />
            </div>
            <img className='bkg_yellow' src='./images/blob_yellow.png' alt='yelow mark' />
        </div>
    )

}