import React from 'react';
import RowCell from '@/components/organisms/row/RowCell';
import Table from '@components/atoms/cell/Table';
import RowHeader from '@/components/organisms/row/RowHeader';
import TableHeaderType from '@/components/organisms/row/header.type';
import thrombosis from './testdata/header/Thrombosis';
import thromboResult from './testdata/header/Thrombosis2';

export default function TableType5() {
  const headerThrombo: TableHeaderType.TableHeader[] = thrombosis;
  const resultThrombo: TableHeaderType.Thrombo[] = thromboResult;

  return (
    <Table>
      <RowHeader
        tableType="thrombosis"
        useCheckbox
        headerInfos={headerThrombo}
        thromboInfos={resultThrombo}
      />
      {/* <RowCell /> */}
    </Table>
  );
}
