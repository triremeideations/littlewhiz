import React, { useState } from 'react';
import '../styles/sign_in.css';
import { goToDashboard, loginLearner } from './learner-worker.js';

function LearnerLogin (){

        const [formData, setFormData] = useState(
            {
                email: '',
                password: '',
            }
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
            let tempLogin = [];
            tempLogin.push({
                'learnerEmail': formData.email,
                'learnerPasskey':formData.password
            })
            const learnerLoginInfo = tempLogin[0];
            localStorage.setItem(
                'l-login-info', JSON.stringify(learnerLoginInfo)
            );
            loginLearner(formData.email, formData.password);
        }
    

    return (
        <div className='backdrop'>
            <div className='frames'>
                <div className='login_frame'>
                    <br/>
                    <h3>Learner Login</h3>
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
                        <label>
                            Password:
                            <br/>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <br/>
                        </label><br/>
                        <br/>
                        <button type='submit'>GO Champ!</button>
                    </form>
                </div>

                <div className='login-sd_frame'>
                </div>

                <div className='loginDialog login-pass'>
                    <h1>Welcome!</h1>
                    <br/>
                    <p> 
                        Hi <span id='logName'></span>!
                        Your Login was successful.
                        <br/><br/>
                        Your amazing journey continues!
                        <br/><br/>
                        Regards,<br/>
                        Quibble.
                        <br/><br/>
                    </p>

                    <button onClick={()=>goToDashboard()}>
                        Go to Dashboard
                    </button>
                    
                </div>
                <div className='loginDialog login-fail'>
                    <h1>Oops!</h1>
                    <br/>
                    <p>
                        Something went wrong.<br/>
                        <span id='lgerMsg'></span>
                        <br/>
                        <br/>
                        Please try again...
                    </p>
                    <br/><br/>
                    <div>
                        <button onClick={()=>window.location.reload()}>
                            CLOSE
                        </button>
                        &nbsp; &nbsp; &nbsp;
                        <a href='/learner-reset'>
                            <button>FORGOT PASSWORD?</button>
                        </a>
                    </div>
                </div>
                <div className='login-load'></div>
            </div>
        </div>
    )
}

export default LearnerLogin;