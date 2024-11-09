import React, { useState } from "react";
import axios from "axios";
import "./Components.css";

function ExpenseForm() {
  // Set up state for form fields
  const [titel, setTitel] = useState("");
  const [capital, setCapital] = useState("");
  const [projectNo, setProjectNo] = useState("");
  const [fundBy, setFundBy] = useState("");
  const [startDt, setStartDt] = useState("");
  const [endDt, setEndDt] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/projects", {
        titel,
        capital,
        startDt,
        fundBy,
        projectNo,
        endDt
      });
      console.log("Data submitted successfully:", response.data);
      alert("Project added successfully");
      // Optionally, clear the form fields
      setTitel("");
      setCapital("");
      setStartDt("");
      setProjectNo("");
      setFundBy("");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error adding expense");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="expform">
        <div className="formLable">
          <label>Title:</label>
          <input
            type="text"
            value={titel}
            onChange={(e) => setTitel(e.target.value)}
            required
          />
        </div>
        <div className="formLable">
          <label>Project No:</label>
          <input
            type="text"
            value={projectNo}
            onChange={(e) => setProjectNo(e.target.value)}
            required
          />
        </div>
        <div className="formLable">
          <label>Sanctioned Amount:</label>
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
        </div>
        <div className="formLable">
          <label>Funded By:</label>
          <input
            type="text"
            value={fundBy}
            onChange={(e) => setFundBy(e.target.value)}
          />
        </div>
        <div className="formLable">
          <label>Start Dt:</label>
          <input
            type="date"
            value={startDt}
            onChange={(e) => setStartDt(e.target.value)}
            required
          />
        </div>
        <div className="formLable">
          <label>End Dt:</label>
          <input
            type="date"
            value={endDt}
            onChange={(e) => setEndDt(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit" className="addBtn">
        Add Project
      </button>
    </form>
  );
}

export default ExpenseForm;
