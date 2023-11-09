import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Clock.scss';

export default function Clock() {

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className='Clock'>
            <h3>
                {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </h3>
        </div>
    )
}
