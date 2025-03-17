import React from 'react';
import RowCell from '@/components/organisms/row/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import basic2 from './testdata/header/Basic2';
import TableHeaderType from '@/components/organisms/row/header.type';
import BasicData2 from './testdata/body/BasicData2';

export default function TableType2() {
  const headerBasic: TableHeaderType.TableHeader[] = basic2;

  return (
    <Table>
      <RowHeader tableType="basic" useCheckbox headerInfos={headerBasic} />
      <RowCell bodyData={BasicData2} useCheckbox />
    </Table>
  );
}
