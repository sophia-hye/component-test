import React from 'react';
import RowCell from '@components/organisms/table/RowCell';
import Table from 'src/components/atoms/cell/Table';
import RowHeader1 from 'src/components/organisms/table/RowHeader1';
import RowHeader2 from 'src/components/organisms/table/RowHeader2';
import RowHeader3 from 'src/components/organisms/table/RowHeader3';
import RowHeader4 from 'src/components/organisms/table/RowHeader4';

export default function TableType1() {
  return (
    <Table>
      <RowHeader1 rowSpan={4} />
      <RowHeader2 />
      <RowHeader3 />
      <RowHeader4 />
      <RowCell />
    </Table>
  );
}
