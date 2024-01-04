import React, { useState } from 'react';
import '../styles/sign_up.css';

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
            console.log(`
                This is ${formData.username}'s email: ${formData.email}.
                This is their password: ${formData.password}
            `);
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
                    </label>
                    <br/><br/>
                    <button type='submit'>GO Champ!</button>
                </form>
            </div>

            <div className='side_frame'>
            </div>
        </div>
    </div>
  )
}

export default LearnerInputs;