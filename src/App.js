import React from 'react';
import './App.css';
import TableType1 from '@components/pages/table/TableType1';
import TableType5 from './components/pages/table/TableType5';
import TableType8 from './components/pages/table/TableType8';
import TableType2 from './components/pages/table/TableType2';
import Button from './commonui/button/Button';
import ButtonToggle from '@commonui/button/ButtonToggle';
import ChipLined from './commonui/chip/ChipLined';
import ChipFilled from './commonui/chip/ChipFilled';

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
      <div style={{ display: 'flex', gap: 10 }}>
        <Button.Filled disabled>my button</Button.Filled>
        <Button.FilledLeftIcon>icon left</Button.FilledLeftIcon>
        <Button.FilledRightIcon>icon right</Button.FilledRightIcon>
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <Button.Lined>my button</Button.Lined>
        <Button.LinedLeftIcon disabled>icon left</Button.LinedLeftIcon>
        <Button.LinedRightIcon>icon right</Button.LinedRightIcon>
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <ButtonToggle />
        <ButtonToggle usage="channel1" />
        <ButtonToggle usage="channel2" />
        <ButtonToggle usage="channel3" />
        <ButtonToggle usage="channel4" />
        <ButtonToggle usage="channel5" />
        <ButtonToggle disabled />
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <ChipLined>chip1</ChipLined>
        <ChipFilled>chip2</ChipFilled>
      </div>
    </>
  );
}

export default App;
