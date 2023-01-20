import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './components/barChart/BarChart';
import axios from 'axios';
import HeatMap from './components/heatMap/HeatMap';
import {sampleData} from './data/sample';
const API_URL = 'http://localhost:8080/record/';

function App() {
  const [option, setOption] = useState('');
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      try{
        const data = (await axios.get(API_URL)).data;
        setData(data);
      }
      catch(err){
        console.log(err)
      }
    }
    getData();
    
  },[])

  const optionChangeHandler = (e)=>{
    setOption(e.target.value);
  }
  return (
    <div className='container'>
      <div className='row' style={{width:'30%'}}>
          <div className='justify-content-left'>
            <select className="form-select" aria-label="Select from the dropdown" onChange={optionChangeHandler}>
              <option value='default'>Select an option</option>
              <option value="number_of_humans">Number of humans</option>
              <option value="avg_x_pos">Average X position</option>
            </select>
          </div>
      </div>
      <BarChart selectOption={option} data={data}/>
      {/* <HeatMap data={data}/> */}
    </div>

  );
}

export default App;
