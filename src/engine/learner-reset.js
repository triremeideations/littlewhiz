import React, { useState } from 'react';
import '../styles/sign_reset.css';
import { forgotPassword } from './learner-worker.js';

function LearnerReset (){

        const [formData, setFormData] = useState(
            { email: ''}
        )

        const handleChange =(e)=> {
            const { name, value } = e.target;
            setFormData(
                (prior)=>(
                    { ...prior, [name]: value }
                )
            );
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            forgotPassword(formData.email);
        }
    

    return (
        <div className='backdrop'>
            <div className='frames'>
                <div className='reset_frame'>
                    <br/>
                    <h3>Reset Password</h3>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <br/>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <br/>
                        </label><br/>
                        <br/>
                        <button type='submit'>GO Champ!</button>
                    </form>
                </div>

                <div className='reset-sd_frame'>
                </div>

                <div className='resetDialog reset-pass'>
                    <h1>Got Mail!</h1>
                    <br/>
                    <p> 
                        A password reset link has been sent to
                        the address you just provided.
                        <br/><br/>
                        Do ensure it is active, and that
                        you are able to receive mails on it.
                    </p>
                    <br/><br/>
                    <a href='/'>
                        <button>HOME</button>
                    </a>
                </div>
                <div className='resetDialog reset-fail'>
                    <h1>Oops!</h1>
                    <br/>
                    <p>
                        Something went wrong.<br/>
                        <span id='resetErrMsg'></span>
                        <br/>
                        <br/>
                        Please try again...
                    </p>
                    <br/><br/>
                    <button onClick={()=>window.location.reload()}>
                        CLOSE
                    </button>
                </div>
                <div className='reset-load'></div>
            </div>
        </div>
    )
}

export default LearnerReset;