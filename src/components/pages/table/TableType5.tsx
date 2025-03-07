import React from 'react';
import RowCell from '@/components/organisms/row/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import TableHeaderType from '@/components/organisms/row/header.type';
import thrombosis from './testdata/header/Thrombosis';

export default function TableType5() {
  const headerThrombo: TableHeaderType.TableHeader[] = thrombosis;

  return (
    <Table>
      <RowHeader tableType="basic" useCheckbox HeaderInfos={headerThrombo} />
      <RowCell />
    </Table>
  );
}
