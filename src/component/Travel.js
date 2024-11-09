import React, { useState } from 'react';

function Travel() {
  const [formData, setFormData] = useState({
    expenditureMonth: '',
    personName: '',
    travelDate: '',
    travelPurpose: '',
    invoiceNumber: '',
    invoiceAmount: '',
    paymentStatus: '',
    paymentAmount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Travel Details Submitted:", formData);
  };

  return (
    <div>
      <h3>Travel Details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Expenditure Month:
          <input type="text" name="expenditureMonth" value={formData.expenditureMonth} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name of Person:
          <input type="text" name="personName" value={formData.personName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Travel Date:
          <input type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          Traveling For:
          <input type="text" name="travelPurpose" value={formData.travelPurpose} onChange={handleChange} />
        </label>
        <br />
        <label>
          Invoice Number:
          <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Invoice Amount (INR):
          <input type="number" name="invoiceAmount" value={formData.invoiceAmount} onChange={handleChange} />
        </label>
        <br />
        <label>
          Payment Status:
          <input type="text" name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} />
        </label>
        <br />
        <label>
          Payment Amount (INR):
          <input type="number" name="paymentAmount" value={formData.paymentAmount} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Travel;
