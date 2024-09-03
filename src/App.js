import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Header from './components/Header/Header';

function App() {
  const [data,setData]=useState("")
  const handleform=(country)=>{
    setData(country)
  }
  return (
    <div className="App">
      <Header handleform={handleform}/>
      <CardContainer searchedValue={data}/>
    </div>
  );
}

export default App;
