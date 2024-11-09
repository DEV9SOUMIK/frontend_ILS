import React, { useState } from 'react';

function Manpower() {
  const [expenditureMonth, setExpenditureMonth] = useState('');
  const [amountPaid, setAmountPaid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Manpower Details Submitted:", { expenditureMonth, amountPaid });
  };

  return (
    <div>
      <h3>Manpower Details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Expenditure Month:
          <input
            type="text"
            value={expenditureMonth}
            onChange={(e) => setExpenditureMonth(e.target.value)}
          />
        </label>
        <br />
        <label>
          Amount Paid (INR):
          <input
            type="number"
            value={amountPaid}
            onChange={(e) => setAmountPaid(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Manpower;
