import React from 'react';
import RowCell from '@/components/organisms/row/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import TableHeaderType from '@/components/organisms/row/header.type';
import merge from './testdata/header/Merge';

export default function TableType8() {
  const headerMerge: TableHeaderType.TableHeader[] = merge;

  return (
    <Table>
      <RowHeader tableType="basic" useCheckbox HeaderInfos={headerMerge} />
      <RowCell />
    </Table>
  );
}
