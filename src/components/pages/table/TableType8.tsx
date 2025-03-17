import React from 'react';
import TableHeaderType from '@/components/organisms/row/header.type';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import RowCellMerge from '@/components/organisms/row/RowCellMerge';
import merge from './testdata/header/Merge';
import MergedData from './testdata/body/MergedData';

export default function TableType8() {
  const headerMerge: TableHeaderType.TableHeader[] = merge;

  return (
    <Table>
      <RowHeader tableType="merge" useCheckbox headerInfos={headerMerge} />
      <RowCellMerge bodyMergedData={MergedData} useCheckbox />
      <RowCellMerge bodyMergedData={MergedData} useCheckbox />
      <RowCellMerge bodyMergedData={MergedData} useCheckbox />
    </Table>
  );
}
