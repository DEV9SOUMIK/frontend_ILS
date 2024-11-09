import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './item.css';
import { Link } from 'react-router-dom';

function ItemTable() {
  // State to store all items fetched from the backend
  const [items, setItems] = useState([]);
  // State to store the search term entered by the user in the search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch items from the backend API when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Get items from the backend API
        const response = await axios.get('http://localhost:5000/api/projects');
        // Set the fetched items in the 'items' state
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems(); // Call the fetch function once when component mounts
  }, []);

  // Helper function to format dates in a readable format
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // Function to handle deleting an item from the database
  const handleDelete = async (id) => {
    try {
      // Send a delete request to the backend API for the specific item
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      // Update the 'items' state by filtering out the deleted item
      setItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Filter items based on the search term entered by the user
  const filteredItems = items.filter((item) =>
    // Check if the item’s title, project number, or fundedBy fields include the search term
    item.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.projectNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.fundBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Projects</h2>

      {/* Search bar to filter projects */}
      <input
        type="text"
        placeholder="&#x1F50E;Search projects..."
        value={searchTerm} // Bind the searchTerm state to the input value
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        className="search-bar"
      />

      {/* Table to display project items */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Capital</th>
            <th>Funded By</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the filtered items and display each in a row */}
          {filteredItems.map((item) => (
            <tr key={item._id}>
              {/* Display item data in plain text */}
              <td>{item.titel}</td>
              <td>{item.projectNo}</td>
              <td>{item.capital}</td>
              <td>{item.fundBy}</td>
              <td>{formatDate(item.startDt)}</td>
              <td>{formatDate(item.endDt)}</td>
              <td>
                {/* Delete button */}
                <button onClick={() => handleDelete(item._id)}>Delete</button>
                {/* Disabled Edit button */}
                <button disabled>Edit</button>
                <Link to={`/project/${item._id}`}><button >Open</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;


