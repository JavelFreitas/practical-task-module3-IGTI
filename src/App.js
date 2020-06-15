import React from 'react';
import FullBar from './components/FullBar';
import Input from './components/Input';

function App() {
  return (
    <>
      <Input getSalary={1000}/>
      <FullBar barOne={10} barTwo={20} barThree={40}/>
      {
        console.log(calculateSalaryFrom(1000))  
      }
    </>
  );
}

export default App;
