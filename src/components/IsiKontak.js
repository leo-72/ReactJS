import React from 'react';
import '../App.css';
import {Button} from './Button';
import './IsiKontak.css';

function IsiKontak() {
    return (
        <div className='kontak-container'>
            <img src="../images/wallreact.jpg" height />
            <h1>KONTAK</h1>
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

export default IsiKontak
