import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Define the onSubmit function to send data to the backend
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST', // Add this if you're sending data to the server
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    

      const result = await response.json();
      if (response.ok) {
        alert('User registered successfully');
      } else {
        alert(`Registration failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div>
      <div style={{
        height: '340px', width: '318px', background: 'white', borderRadius: '8px',
        position: 'absolute', left: '38%', top: '30%', boxShadow: '4px 4px 24px rgb(194, 194, 194)'
      }}>
        <h1 style={{ fontFamily: 'Arial', color: '#2f1c6a', textAlign: 'center' }}>Login</h1>
        <p style={{ fontFamily: 'Arial', textAlign: 'center' }}>Password 6 characters or more &#169;</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label style={{ fontFamily: 'Arial', margin: '4px' }}>Email: &#9993;
            <input type='email' placeholder='mayank@gmail.com' {...register("email")} 
                   style={{ borderRadius: '4px', margin: '4px', borderColor: 'rgb(55, 175, 225)', 
                            borderStyle: 'solid', borderWidth: '0.8px', height: '24px', width: '300px' }} />
          </label>

          <label style={{ fontFamily: 'Arial', margin: '4px' }}>Password: &#128274;
            <input type='password' {...register("password", { required: true, minLength: 6 })} 
                   style={{ borderRadius: '4px', margin: '4px', borderColor: 'rgb(55, 175, 225)', 
                            borderStyle: 'solid', borderWidth: '0.8px', height: '24px', width: '300px' }} />
          </label>

          {errors.password && <span style={{ color: 'red' }}>Password is required and should be at least 6 characters</span>}

          <p style={{ fontFamily: 'Arial', margin: '12px', textAlign: 'center' }}>Don't have an account</p>
          <Link to={"/signin"}>Create New Account</Link>

          <input type="submit" style={{
            background: 'rgb(55, 175, 225)', border: 'none', color: 'white', height: '24px',
            width: '200px', borderRadius: '4px', margin: '12px', cursor: 'pointer'
          }} />
        </form>
      </div>
    </div>
  );
}

