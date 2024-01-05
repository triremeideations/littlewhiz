import React, { useState } from 'react';
import '../styles/sign_up.css';
import { newLearner } from './learner-worker.js';

function LearnerInputs (){

        const [formData, setFormData] = useState(
            {
                username: '',
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
            const passWd = document.querySelector('#passWd');
            if(formData.password.length < 6) passWd.style.opacity='1'
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
                <br/><br/>
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
                    </label>
                    <br/><br/>
                    <button type='submit'>GO Champ!</button>
                </form>
            </div>

            <div className='side_frame'>
            </div>

            <div className='dialog success'>
                <h1>Hooray!</h1>
                <br/>
                <p> 
                    Welcome, <span id='reg'></span>.
                    <br/>
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
                    It seems like this email has already been registered!
                    <br/>
                    <br/>
                    If it hasn't, check that your internet connection is working,
                    and that your email address is correct.
                    <br/>
                    <br/>
                    Please try again...
                </p>
                <br/>
                <button onClick={()=>window.location.reload()}>CLOSE</button>
            </div>
        </div>
    </div>
  )
}

export default LearnerInputs;