
import { MuiThemeProvider } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import React from 'react'
import './Message.scss';


export default function Message() {
    return (
        <MuiThemeProvider>
            <div className='Message'>
                <div className='MessageLabel'>
                    <h1>დაგვიტოვეთ წერილი</h1>
                </div>
                <div>
                    <h3>სახელი</h3>
                    <TextField className="NameTextField" id='sex' fullWidth color="secondary" />
                </div>
                <div>
                    <h3>გვითხარით რა გაწუხებთ</h3>
                    <TextField
                        className='MessageTextField'
                        fullWidth
                        id="filled-multiline-static"
                        label="Multiline"
                        required
                        rows={4}
                        defaultValue=""
                        variant="filled"
                    />
                </div>
                <div>
                    <button className='SubButton'><h5>გაგზავნა</h5></button>

                </div>
            </div>
        </MuiThemeProvider>
    )
}
