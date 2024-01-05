import React, { useState } from 'react';
import '../styles/sign_up.css';
import { newLearner } from './learner-worker.js';

function LearnerCreate (){

        const [formData, setFormData] = useState(
            {
                username: '',
                email: '',
                password: '',
                retypePassword: '',
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
            const passWd = document.querySelector('#passWd');
            const rePassWd = document.querySelector('#rePassWd');
            if(formData.password.length < 6)
                passWd.style.opacity='1'
            else if(formData.password !== formData.retypePassword)
                rePassWd.style.opacity='1'
            else {
                let tempReg = [];
                tempReg.push({
                    'learnerName': formData.username,
                    'learnerEmail': formData.email,
                    'learnerPasskey':formData.password
                })
                const learnerRegInfo = tempReg[0];
                localStorage.setItem(
                    'l-reg-info', JSON.stringify(learnerRegInfo)
                );
                newLearner(formData.email, formData.password, formData.username);
            }
        }


  return (
    <div className='backdrop'>
        <div className='frames'>
            <div className='signup_frame'>
                <br/>
                <h3>Create New Learner Profile</h3>
                <br/>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <br/>
                        <input
                            type='text'
                            name='username'
                            value = {formData.username}
                            onChange={handleChange}
                            required
                        />
                        <br/>
                    </label><br/>
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
                        <small id='passWd'>
                            password should be at least 7 characters long
                        </small>
                    </label><br/>
                    <label>
                        Confirm Password:
                        <br/>
                        <input
                            type='password'
                            name='retypePassword'
                            value={formData.retypePassword}
                            onChange={handleChange}
                            required
                        />
                        <br/>
                        <small id='rePassWd'>
                            passwords should match
                        </small>
                    </label><br/>
                    <br/>
                    <button type='submit'>GO Champ!</button>
                </form>
            </div>

            <div className='side_frame'>
            </div>

            <div className='dialog success'>
                <h1>Hooray!</h1>
                <br/>
                <p> 
                    Registration successful.<br/>
                    A verification link has been sent to <span id='mail'></span>
                    <br/>
                    <br/>
                    Welcome, <span id='reg'></span>.
                    <br/>
                    You are officially a little whiz! <br/>
                    Get ready for loads of fun, games and learning.
                    <br/><br/>
                    Your amazing journey has begun!
                    <br/><br/>
                    Regards,<br/>
                    Quibble.
                    <br/><br/>
                </p>
                
                <a href='/'>
                    <button>Go to Dashboard</button>
                </a>
            </div>
            <div className='dialog failed'>
                <h1>Oops!</h1>
                <br/>
                <p>
                    <span id='eMsg'>
                    It seems like this email has already been registered!
                    <br/>
                    <br/>
                    If it hasn't, please check that your email address is correct.
                    </span>
                    <br/>
                    <br/>
                    Please try again...
                </p>
                <br/>
                <button onClick={()=>window.location.reload()}>CLOSE</button>
            </div>
            <div className='loading'></div>
        </div>
    </div>
  )
}

export default LearnerCreate;