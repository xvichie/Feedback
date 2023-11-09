import './Faces.scss';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import NotSatisfiedEmoji from '../../images/hate_gif.gif';
import MidSatisfiedEmoji from '../../images/mid_gif.gif'
import GoodSatisfiedEmoji from '../../images/love_gif.gif'
import Message from '../Message/Message';


// LOGO COLOR THEME
// LOGO COLOR THEME
//LOGO COLOR THEME



function Faces() {



    return (
        <>
            <div className="Faces">
                <Popup trigger=
                    {
                        <div className='not_satisfied stretch_column'>
                            <img src={NotSatisfiedEmoji} alt="shit" />
                        </div>
                    }
                    position="top center"
                    modal
                    nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header" style={{ backgroundColor: "#9364CC", color: "white", padding: "10px 0 10px 0" }}>მედი</div>
                            <div className="content">
                                {/* {' '}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae? */}
                                <Message></Message>
                            </div>
                            {/* <div className="actions">
                            <button
                                className="button"
                                onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                }}
                            >
                                close modal
                            </button>
                        </div> */}
                        </div>
                    )}
                </Popup>
                <Popup trigger=
                    {
                        <div className='mid_satisfied stretch_column'>
                            <img src={MidSatisfiedEmoji} alt="shit" />
                        </div>
                    }
                    position="top center"
                    modal
                    nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header"> Modal Title </div>
                            <div className="content">
                                {' '}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                            <div className="actions">
                                <button
                                    className="button"
                                    onClick={() => {
                                        console.log('modal closed ');
                                        close();
                                    }}
                                >
                                    close modal
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
                <Popup trigger=
                    {
                        <div className='good_satisfied stretch_column'>
                            <img src={GoodSatisfiedEmoji} alt="shit" />
                        </div>
                    }
                    position="top center"
                    modal
                    nested>
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                            <div className="header"> Modal Title </div>
                            <div className="content">
                                {' '}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                            <div className="actions">
                                <button
                                    className="button"
                                    onClick={() => {
                                        console.log('modal closed ');
                                        close();
                                    }}
                                >
                                    close modal
                                </button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        </>
    );
}

export default Faces;
