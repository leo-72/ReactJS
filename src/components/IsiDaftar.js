import React from 'react';
import '../App.css';
import {Button} from './Button';
import './IsiDaftar.css';

function IsiDaftar() {
    return (
        <div className='daftar-container'>
            <img src="../images/wallreact.jpg" height />
            <h1>DAFTAR</h1>
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

export default IsiDaftar
