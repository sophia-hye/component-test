import React from 'react';
import RowCell from '@components/organisms/table/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader1 from '@components/organisms/table/RowHeader1';
import RowHeader2 from '@components/organisms/table/RowHeader2';
import RowHeader3 from '@components/organisms/table/RowHeader3';
import RowHeader4 from '@components/organisms/table/RowHeader4';

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
