// import React, { useState } from "react";
// import axios from "axios";
// import "./Components.css";


// const Editproject = () => {
//       // Set up state for form fields
//   const [titel, setTitel] = useState("");
//   const [capital, setCapital] = useState("");
//   const [projectNo, setProjectNo] = useState("");
//   const [fundBy, setFundBy] = useState("");
//   const [startDt, setStartDt] = useState("");
//   const [endDt, setEndDt] = useState("");
//   var data = null;
//    // Handle form submission
//   const handleSubmit = async (id) => {
//     id.preventDefault();
//      data = getdata(id);
//      console.log (data);
//     try {
//       const response = await axios.put(`http://localhost:5000/api/projects/${id}`, {
//         titel,
//         capital,
//         startDt,
//         fundBy,
//         projectNo,
//         endDt
//       });
//       console.log("Data submitted successfully:", response.data);
//       alert("Project added successfully");
//       // Optionally, clear the form fields
//       setTitel("");
//       setCapital("");
//       setStartDt("");
//       setProjectNo("");
//       setFundBy("");
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("Error adding expense");
//     }
//   };
//   const getdata = async (id) => {
//     id.preventDefault();
//     try {
//       const response = await axios.get(`http://localhost:5000/api/projects/${id}`, {
//         titel,
//         capital,
//         startDt,
//         fundBy,
//         projectNo,
//         endDt,
    
//       });
//       console.log("Data submitted successfully:", response.data);
//       alert("Project added successfully");
//       // Optionally, clear the form fields
//       setTitel("");
//       setCapital("");
//       setStartDt("");
//       setProjectNo("");
//       setFundBy("");
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("Error adding expense");
//     }
//   };

//   return (
//        <form onSubmit={handleSubmit}>
//       <div className="expform">
//         <div className="formLable">
//           <label>Title:</label>
//           <input
//             type="text"
//             value={titel}
//             onChange={(e) => setTitel(e.target.value)}
//             required
//             placeholder={data.titel}
//           />
//         </div>
//         <div className="formLable">
//           <label>Project No:</label>
//           <input
//             type="text"
//             value={projectNo}
//             onChange={(e) => setProjectNo(e.target.value)}
//             required
//             placeholder={data.projectNo}
//           />
//         </div>
//         <div className="formLable">
//           <label>Sanctioned Amount:</label>
//           <input
//             type="number"
//             value={capital}
//             onChange={(e) => setCapital(e.target.value)}
//             placeholder={data.capital}
//           />
//         </div>
//         <div className="formLable">
//           <label>Funded By:</label>
//           <input
//             type="text"
//             value={fundBy}
//             onChange={(e) => setFundBy(e.target.value)}
//             placeholder={data.fundBy}
//           />
//         </div>
//         <div className="formLable">
//           <label>Start Dt:</label>
//           <input
//             type="date"
//             value={startDt}
//             onChange={(e) => setStartDt(e.target.value)}
//             required
//             placeholder={data.startDt}
//           />
//         </div>
//         <div className="formLable">
//           <label>End Dt:</label>
//           <input
//             type="date"
//             value={endDt}
//             onChange={(e) => setEndDt(e.target.value)}
//             required
//             placeholder={data.endDt}
//           />
//         </div>
//       </div>
//       <button type="submit" className="addBtn">
//         Add Project
//       </button>
//     </form>
    
//   )
// }

// export default Editproject

import React, { useState } from "react";
import axios from "axios";
import "./Components.css";

const Editproject = () => {
  // Set up state for form fields
  const [titel, setTitel] = useState("");
  const [capital, setCapital] = useState("");
  const [projectNo, setProjectNo] = useState("");
  const [fundBy, setFundBy] = useState("");
  const [startDt, setStartDt] = useState("");
  const [endDt, setEndDt] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({});

  // Function to open the modal
  const openModal = async (id) => {
    try {
        console.log (data);
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
      setData(response.data);
      setTitel(response.data.titel);
      setCapital(response.data.capital);
      setProjectNo(response.data.projectNo);
      setFundBy(response.data.fundBy);
      setStartDt(response.data.startDt);
      setEndDt(response.data.endDt);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching project data");
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/projects/${data._id}`, {
        titel,
        capital,
        projectNo,
        fundBy,
        startDt,
        endDt
      });
      console.log("Data updated successfully:", response.data);
      alert("Project updated successfully");
      closeModal();
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error updating project");
    }
  };

  return (
    <div>
      <button onClick={() => openModal(data._id)} className="editButton">
        Edit Project
      </button>

      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Edit Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="expform">
                <div className="formLable">
                  <label>Title:</label>
                  <input
                    type="text"
                    value={titel}
                    onChange={(e) => setTitel(e.target.value)}
                    required
                    placeholder={data.titel}
                  />
                </div>
                <div className="formLable">
                  <label>Project No:</label>
                  <input
                    type="text"
                    value={projectNo}
                    onChange={(e) => setProjectNo(e.target.value)}
                    required
                    placeholder={data.projectNo}
                  />
                </div>
                <div className="formLable">
                  <label>Sanctioned Amount:</label>
                  <input
                    type="number"
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)}
                    placeholder={data.capital}
                  />
                </div>
                <div className="formLable">
                  <label>Funded By:</label>
                  <input
                    type="text"
                    value={fundBy}
                    onChange={(e) => setFundBy(e.target.value)}
                    placeholder={data.fundBy}
                  />
                </div>
                <div className="formLable">
                  <label>Start Dt:</label>
                  <input
                    type="date"
                    value={startDt}
                    onChange={(e) => setStartDt(e.target.value)}
                    required
                    placeholder={data.startDt}
                  />
                </div>
                <div className="formLable">
                  <label>End Dt:</label>
                  <input
                    type="date"
                    value={endDt}
                    onChange={(e) => setEndDt(e.target.value)}
                    required
                    placeholder={data.endDt}
                  />
                </div>
              </div>
              <button type="submit" className="addBtn">Update Project</button>
              <button type="button" onClick={closeModal} className="cancelBtn">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editproject;
