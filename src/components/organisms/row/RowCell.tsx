import React, { useEffect, useState } from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableCell from '@components/molecules/cell/TableCell';
import cellData from './testdata/CellData';

export default function RowCell() {
  const [isHovered, setIsHovered] = useState(false);

  const meltPositives = ['+', '++', '+++'];

  useEffect(() => {
    console.log('Row Hover Test: ', isHovered);
  }, [isHovered]);

  return (
    <Tr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TableCell
        content="checkbox"
        tdKey="normal"
        isHovered={isHovered}
        checked={false}
      />
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={cellData.rowIndex.toString()}
      />
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={cellData.wellId}
      />
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={cellData.sampleId}
        alignLeft
      />
      <TableCell
        content="cell16"
        tdKey={cellData.result.includes('invalid') ? 'invalid' : 'normal'}
        isHovered={isHovered}
        text={cellData.result}
        alignLeft
      />
      {/* select box로 바꿔야함 */}
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={cellData.wellType}
      />
      {cellData.targetResult.map(value => {
        if (meltPositives.includes(value) || !Number.isNaN(Number(value)))
          return (
            <TableCell
              content="cell16"
              tdKey="positive"
              isHovered={isHovered}
              text={value}
            />
          );
        return (
          <TableCell
            content="cell16"
            tdKey="normal"
            isHovered={isHovered}
            text={value}
          />
        );
      })}
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text="your comments ... "
      />
    </Tr>
  );
}
