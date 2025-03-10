import React from 'react';
import RowCell from '@/components/organisms/row/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import TableHeaderType from '@/components/organisms/row/header.type';
import merge from './testdata/header/Merge';
import BasicData from './testdata/body/BasicData';

export default function TableType8() {
  const headerMerge: TableHeaderType.TableHeader[] = merge;

  return (
    <Table>
      <RowHeader tableType="merge" useCheckbox headerInfos={headerMerge} />
      <RowCell bodyData={BasicData} />
    </Table>
  );
}
