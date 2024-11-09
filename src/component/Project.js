import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Manpower from './Manpower';
import Travel from './Travel';
import Consumables from './Consumables';
import Equpment from './Equipment';
import ContingencyDetails from './Conten';

const Project = () => {
    let {id} = useParams();
    const [items, setItems] = useState({});
    console.log(id, 'ids');
    useEffect(() => {
        async function fetchData() {
            try {
                // Get items from the backend API
                const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
                // Set the fetched items in the 'items' state
                console.log(response)
                setItems(response.data);
                console.log(items,'items');
              } catch (error) {
                console.error('Error fetching items:', error);
              }
        }
        fetchData();
      }, [id]);


    const [activeSection, setActiveSection] = useState('Manpower');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
   
    <div style={{ textAlign: 'center' }}>
      <h2>Project Details</h2>
       <h5>{items.titel}</h5>
       <h5>{items.projectId}</h5>
       <h5>{items.capital}</h5>
       <h5>{items.fundBy}</h5>

      <div>
        <button onClick={() => handleButtonClick('Manpower')}>Manpower</button>
        <button onClick={() => handleButtonClick('Travels')}>Travels</button>
        <button onClick={() => handleButtonClick('Consumables')}>Consumables</button>
        <button onClick={() => handleButtonClick('Equpmentes')}>Equpmentes</button>
        <button onClick={() => handleButtonClick('Conten')}>Conten</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <DetailsContainer activeSection={activeSection} />
      </div>
    </div>
  );
}

function DetailsContainer({ activeSection }) {
  switch (activeSection) {
    case 'Manpower':
      return <Manpower/>;
    case 'Travels':
      return <Travel/>;
    case 'Consumables':
      return <Consumables/>;
    case 'Equpmentes':
      return <Equpment/>;
      case 'Conten':
      return <ContingencyDetails/>;
    default:
      return null;
  }

}

export default Project
