import React, { useEffect, useState } from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableBodyType from './body.type';
import TableComment from '../cell/TableComment';
import TableCheckbox from '../cell/TableCheckbox';
import TableNo from '../cell/TableNo';
import TableWellId from '../cell/TableWellId';
import TableSampleId from '../cell/TableSampleId';
import TableType from '../cell/TableType';
import TableResult from '../cell/TableResult';
import TableTarget from '../cell/TableTarget';

interface RowCellProps {
  bodyData: TableBodyType.TableBodyData;
}

export default function RowCell({ bodyData }: RowCellProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isThrombosisAssay = Array.isArray(bodyData.result);

  useEffect(() => {
    console.log('Row Hover Test: ', isHovered);
  }, [isHovered]);

  return (
    <Tr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TableCheckbox isHovered={isHovered} />
      <TableNo isHovered={isHovered} rowIndex={bodyData.rowIndex} />
      <TableWellId isHovered={isHovered} wellId={bodyData.wellId} />
      <TableSampleId isHovered={isHovered} sampleId={bodyData.sampleId} />
      <TableResult isHovered={isHovered} result={bodyData.result} />
      <TableType isHovered={isHovered} wellType={bodyData.wellType} />
      {bodyData.targetResult.map(value => (
        <TableTarget
          isHovered={isHovered}
          value={value}
          isThrombosisAssay={isThrombosisAssay}
        />
      ))}
      <TableComment isHovered={isHovered} comment={bodyData.comment} />
    </Tr>
  );
}
