import React from 'react';
import Tr from 'src/components/atoms/cell/Tr';
import TableCell from 'src/components/molecules/cell/TableCell';
import cellData from './CellData';

export default function RowCell() {
  const meltPositives = ['+', '++', '+++'];

  return (
    <Tr>
      <TableCell content="checkbox" tdKey="normal" checked={false} />
      <TableCell
        content="cell16"
        tdKey="normal"
        text={cellData.rowIndex.toString()}
      />
      <TableCell content="cell16" tdKey="normal" text={cellData.wellId} />
      <TableCell
        content="cell16"
        tdKey="normal"
        text={cellData.sampleId}
        alignLeft
      />
      <TableCell
        content="cell16"
        tdKey={cellData.result.includes('invalid') ? 'invalid' : 'normal'}
        text={cellData.result}
        alignLeft
      />
      {/* select box로 바꿔야함 */}
      <TableCell content="cell16" tdKey="normal" text={cellData.wellType} />
      {cellData.targetResult.map(value => {
        if (meltPositives.includes(value) || Number.isFinite(value))
          return <TableCell content="cell16" tdKey="positive" text={value} />;
        return <TableCell content="cell16" tdKey="normal" text={value} />;
      })}
      <TableCell content="cell16" tdKey="normal" text="your comments ... " />
    </Tr>
  );
}
