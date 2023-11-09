import React, { useState } from 'react';
import { useEffect } from 'react';
import Clock from './Clock/Clock';
import './Header.scss';

export default function Header(props) {
    return (
        <div className='Header'>
            <div className="Logo">
                <img src={props.logo} alt="" />
            </div>
            <div>
                <iframe src="http://192.168.0.101/" frameborder="0"></iframe>
            </div>
            <Clock></Clock>
        </div>
    )
}
