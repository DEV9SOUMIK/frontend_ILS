import axios from 'axios'; // Importing axios for making HTTP requests
import { useState } from 'react'; // Importing useState for managing form state

function Signin() {
  // Set up state for form fields
  const [name, setName] = useState(''); // State for name field
  const [email, setEmail] = useState(''); // State for email field
  const [employeeId, setEmployeeId] = useState(''); // State for employee ID field
  const [password, setPassword] = useState(''); // State for password field
  const [designation, setDesignation] = useState(''); // State for designation dropdown

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    try {
      // Sending form data to the backend API
      const response = await axios.post('http://localhost:5000/api/users', {
        name,
        email,
        employeeId,
        password,
        designation,
      });
      console.log('Data submitted successfully:', response.data); // Logging response data to console
      alert('User registered successfully'); // Show success message

      // Clear form fields after submission
      setName('');
      setEmail('');
      setEmployeeId('');
      setPassword('');
      setDesignation('');
    } catch (error) {
      console.error('Error submitting data:', error); // Log error message if submission fails
      alert('Error registering user'); // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form setup with onSubmit handler */}
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on change
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          required
        />
      </div>
      <div>
        <label>Employee ID:</label>
        <input
          type="text"
          placeholder="Enter your employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)} // Update employee ID state on change
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          required
        />
      </div>
      <div>
        <label>Designation:</label>
        <select
          value={designation}
          onChange={(e) => setDesignation(e.target.value)} // Update designation state on change
          required
        >
          <option value="" disabled>Select designation</option> {/* Placeholder option */}
          <option value="PI">PI</option>
          <option value="Admin">Admin</option>
          <option value="Super Admin">Super Admin</option>
          <option value="Scientist">Scientist</option>
        </select>
      </div>
      <button type="submit">Register</button> {/* Submit button */}
    </form>
  );
}

export default Signin;

