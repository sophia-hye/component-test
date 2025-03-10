import React from 'react';
import './App.css';
import TableType1 from '@components/pages/table/TableType1';
import TableType5 from './components/pages/table/TableType5';
import TableType8 from './components/pages/table/TableType8';
import TableType2 from './components/pages/table/TableType2';

function App() {
  return (
    <>
      <TableType1 />
      <br />
      <TableType2 />
      <br />
      <TableType5 />
      <br />
      <TableType8 />
    </>
  );
}

export default App;
