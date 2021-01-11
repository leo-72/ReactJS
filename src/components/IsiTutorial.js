import React from 'react';
import '../App.css';
import {Button} from './Button';
import './IsiTutorial.css';

function IsiTutorial() {
    return (
        <div className='tutorial-container'>
            <img src="../images/wallreact.jpg" height />
            <h1>TUTORIAL</h1>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                LET'S GO!
                </Button>
            </div>
        </div>
    )
}

export default IsiTutorial
