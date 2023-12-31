import React, { useState } from 'react';

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
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type='text'
                    name='username'
                    value = {formData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                password:
                <input
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br/>
            <button type='submit'>GO Champ!</button>
        </form>
    </div>
  )
}

export default LearnerInputs