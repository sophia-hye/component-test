import React from 'react';
import TableHeaderType from '@/components/organisms/row/header.type';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import RowCell from '@/components/organisms/row/RowCell';
import RowCellMerge from '@/components/organisms/row/RowCellMerge';
import merge from './testdata/header/Merge';
// import BasicData from './testdata/body/BasicData';
import MergedData from './testdata/body/MergedData';

export default function TableType8() {
  const headerMerge: TableHeaderType.TableHeader[] = merge;

  return (
    <Table>
      <RowHeader tableType="merge" useCheckbox headerInfos={headerMerge} />
      {/* <RowCell bodyData={BasicData} /> */}
      <RowCellMerge bodyMergedData={MergedData} />
    </Table>
  );
}
