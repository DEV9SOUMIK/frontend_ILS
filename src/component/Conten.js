import React, { useState } from 'react';

function ContingencyDetails() {
  const [form, setForm] = useState({
    expenditureMonth: '',
    indent: '',
    indentAmount: '',
    indentDate: '',
    poNumber: '',
    poDate: '',
    poAmount: '',
    invoiceAmount: '',
    invoiceNumber: '',
    materialReceived: false,
    challanCopy: '',
    paymentMade: false,
    remarks: '',
    paymentAmount: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contingency Details:', form);
  };

  return (
    <div>
      <h3>Contingency Details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Expenditure Month:
          <input type="text" name="expenditureMonth" value={form.expenditureMonth} onChange={handleChange} />
        </label>
        <label>
          Indent (Scanned Copy):
          <input type="file" name="indent" onChange={handleChange} />
        </label>
        <label>
          Indent Amount (INR):
          <input type="number" name="indentAmount" value={form.indentAmount} onChange={handleChange} />
        </label>
        <label>
          Indent Date:
          <input type="date" name="indentDate" value={form.indentDate} onChange={handleChange} />
        </label>
        <label>
          PO Number:
          <input type="text" name="poNumber" value={form.poNumber} onChange={handleChange} />
        </label>
        <label>
          PO Date:
          <input type="date" name="poDate" value={form.poDate} onChange={handleChange} />
        </label>
        <label>
          Amount of the PO:
          <input type="number" name="poAmount" value={form.poAmount} onChange={handleChange} />
        </label>
        <label>
          Invoice Amount:
          <input type="number" name="invoiceAmount" value={form.invoiceAmount} onChange={handleChange} />
        </label>
        <label>
          Invoice Number:
          <input type="text" name="invoiceNumber" value={form.invoiceNumber} onChange={handleChange} />
        </label>
        <label>
          Material Received:
          <input type="checkbox" name="materialReceived" checked={form.materialReceived} onChange={handleChange} />
        </label>
        <label>
          Challan Copy (if material received):
          <input type="file" name="challanCopy" onChange={handleChange} />
        </label>
        <label>
          Payment Made:
          <input type="checkbox" name="paymentMade" checked={form.paymentMade} onChange={handleChange} />
        </label>
        <label>
          Remarks:
          <textarea name="remarks" value={form.remarks} onChange={handleChange}></textarea>
        </label>
        <label>
          Payment Amount:
          <input type="number" name="paymentAmount" value={form.paymentAmount} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContingencyDetails;