import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Awal.css';

function Awal() {
    return (
        <div className='awal-container'>
            <img src="../images/wallreact.jpg" height />
            <h1>Framework JavaScript</h1>
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

export default Awal
