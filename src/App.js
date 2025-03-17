import React from 'react';
import './App.css';
import TableType1 from '@components/pages/table/TableType1';
import TableType5 from './components/pages/table/TableType5';
import TableType8 from './components/pages/table/TableType8';
import TableType2 from './components/pages/table/TableType2';
import ButtonToggle from '@commonui/button/ButtonToggle';
import Button from './commonui/button/Button';

function App() {
  return (
    <>
      {/* 
      <h3>Table Test</h3>
      <TableType1 />
      <br />
      <TableType2 />
      <br />
      <TableType5 />
      <br />
      <TableType8 /> */}
      <h3>Button Test</h3>
      <Button.Filled disabled>my button</Button.Filled>
      <Button.FilledLeftIcon>icon left</Button.FilledLeftIcon>
      <Button.FilledRightIcon>icon right</Button.FilledRightIcon>
      <br></br>
      <Button.Lined>my button</Button.Lined>
      <Button.LinedLeftIcon disabled>icon left</Button.LinedLeftIcon>
      <Button.LinedRightIcon>icon right</Button.LinedRightIcon>
    </>
  );
}

export default App;
