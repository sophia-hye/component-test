import React from 'react';
import TableType1 from '@/components/pages/table/TableType1';
import TableType2 from '@/components/pages/table/TableType2';
import TableType5 from '@/components/pages/table/TableType5';
import TableType8 from '@/components/pages/table/TableType8';

export default function TestTable() {
  return (
    <div>
      <h3>Table Test</h3>
      <TableType1 />
      <br />
      <TableType2 />
      <br />
      <TableType5 />
      <br />
      <TableType8 />
    </div>
  );
}
