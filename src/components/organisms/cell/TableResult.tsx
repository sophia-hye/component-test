import React from 'react';
import TableCell from '@/components/molecules/cell/TableCell';

interface Props {
  isHovered: boolean;
  result: string | string[];
  rowSpan?: number;
}

export default function TableResult({ isHovered, result, rowSpan }: Props) {
  return typeof result === 'string' ? (
    <TableCell
      content="cell16"
      tdKey={result.includes('invalid') ? 'invalid' : 'normal'}
      isHovered={isHovered}
      text={result}
      rowSpan={rowSpan}
      alignLeft
    />
  ) : (
    // thrombosis result
    result.map(thromboResult => {
      const capitalizedText =
        thromboResult.charAt(0).toUpperCase() + thromboResult.substring(1);
      return (
        <TableCell
          content="cell16"
          tdKey={getThrombosisTdKey(thromboResult)}
          isHovered={isHovered}
          text={capitalizedText}
          rowSpan={rowSpan}
        />
      );
    })
  );
}

function getThrombosisTdKey(result: string) {
  if (result.toLowerCase().includes('invalid')) return 'invalid';
  if (result.toLowerCase().includes('het')) return 'het';
  if (result.toLowerCase().includes('homo')) return 'homo';
  return 'normal';
}
