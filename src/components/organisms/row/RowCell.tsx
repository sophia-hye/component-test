import React, { useEffect, useState } from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableCell from '@components/molecules/cell/TableCell';
import TableBodyType from './body.type';
import { TdKeyType } from '@/components/atoms/cell/Td';

interface RowCellProps {
  bodyData: TableBodyType.TableBodyData;
}

export default function RowCell({ bodyData }: RowCellProps) {
  const [isHovered, setIsHovered] = useState(false);

  const meltPositives = ['+', '++', '+++'];
  const isThrombosisAssay = Array.isArray(bodyData.result);

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
        text={bodyData.rowIndex.toString()}
      />
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={bodyData.wellId}
      />
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={bodyData.sampleId}
        alignLeft
      />
      {typeof bodyData.result === 'string' ? (
        <TableCell
          content="cell16"
          tdKey={bodyData.result.includes('invalid') ? 'invalid' : 'normal'}
          isHovered={isHovered}
          text={bodyData.result}
          alignLeft
        />
      ) : (
        bodyData.result.map(thromboResult => (
          <TableCell
            content="cell16"
            tdKey={getThrombosisTdKey(thromboResult)}
            isHovered={isHovered}
            text={thromboResult}
            alignLeft
          />
        ))
      )}

      {/* select box로 바꿔야함 */}
      <TableCell
        content="cell16"
        tdKey="normal"
        isHovered={isHovered}
        text={bodyData.wellType}
      />
      {bodyData.targetResult.map(value => {
        const isMeltPositive = meltPositives.includes(value);
        const isCtPositive = !Number.isNaN(Number(value));
        if ((isMeltPositive || isCtPositive) && !isThrombosisAssay)
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
        alignLeft
      />
    </Tr>
  );
}

function getThrombosisTdKey(result: string) {
  if (result.toLowerCase().includes('invalid')) return 'invalid';
  if (result.toLowerCase().includes('het')) return 'het';
  if (result.toLowerCase().includes('homo')) return 'homo';
  return 'normal';
}
