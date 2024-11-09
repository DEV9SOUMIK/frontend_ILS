import React, { useState } from 'react';

function Equipment() {
  const [formData, setFormData] = useState({
    expenditureMonth: '',
    indent: '',
    indentAmount: '',
    indentDate: '',
    poNumber: '',
    poDate: '',
    poAmount: '',
    invoiceAmount: '',
    invoiceNumber: '',
    paymentStatus: '',
    remarks: '',
    paymentAmount: '',
    monthwiseExpenditure: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Equipment Details Submitted:", formData);
  };

  return (
    <div>
      <h3>Equipment Details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Expenditure Month:
          <input type="text" name="expenditureMonth" value={formData.expenditureMonth} onChange={handleChange} />
        </label>
        <br />
        <label>
          Indent:
          <input type="text" name="indent" value={formData.indent} onChange={handleChange} />
        </label>
        <br />
        <label>
          Indent Amount (INR):
          <input type="number" name="indentAmount" value={formData.indentAmount} onChange={handleChange} />
        </label>
        <br />
        <label>
          Indent Date:
          <input type="date" name="indentDate" value={formData.indentDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          PO Number:
          <input type="text" name="poNumber" value={formData.poNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          PO Date:
          <input type="date" name="poDate" value={formData.poDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          PO Amount:
          <input type="number" name="poAmount" value={formData.poAmount} onChange={handleChange} />
        </label>
        <br />
        <label>
          Invoice Amount:
          <input type="number" name="invoiceAmount" value={formData.invoiceAmount} onChange={handleChange} />
        </label>
        <br />
        <label>
          Invoice Number:
          <input type="text" name="invoiceNumber" value={formData.invoiceNumber} onChange={handleChange} />
        </label>
        <br />
        <label>
          Payment Status:
          <input type="text" name="paymentStatus" value={formData.paymentStatus} onChange={handleChange} />
        </label>
        <br />
        <label>
          Remarks:
          <input type="text" name="remarks" value={formData.remarks} onChange={handleChange} />
        </label>
        <br />
        <label>
          Payment Amount (INR):
          <input type="number" name="paymentAmount" value={formData.paymentAmount} onChange={handleChange} />
        </label>
        <br />
        <label>
          Monthwise Expenditure:
          <input type="text" name="monthwiseExpenditure" value={formData.monthwiseExpenditure} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Equipment
