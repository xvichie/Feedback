import React from 'react'
import './Footer.scss';

export default function Footer(props) {
    return (
        <div className='Footer' style={{ backgroundColor: props.color }}>
            {props.color}
        </div>
    )
}
