import React from 'react';
import TableCell from '@/components/molecules/cell/TableCell';

interface Props {
  isHovered: boolean;
  rowIndex: number;
  rowSpan?: number;
}

export default function TableNo({ isHovered, rowIndex, rowSpan }: Props) {
  return (
    <TableCell
      content="cell16"
      tdKey="normal"
      isHovered={isHovered}
      text={rowIndex.toString()}
      rowSpan={rowSpan}
    />
  );
}
