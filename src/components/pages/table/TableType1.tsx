import React from 'react';
import RowCell from '@/components/organisms/row/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import basic from './testdata/header/Basic';
import TableHeaderType from '@/components/organisms/row/header.type';

export default function TableType1() {
  const headerBasic: TableHeaderType.TableHeader[] = basic;

  return (
    <Table>
      <RowHeader tableType="basic" useCheckbox headerInfos={headerBasic} />
      <RowCell />
    </Table>
  );
}
