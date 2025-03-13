import React from 'react';
import TableCell from '@/components/molecules/cell/TableCell';

interface Props {
  isHovered: boolean;
  comment?: string;
  rowSpan?: number;
}

export default function TableComment({
  isHovered,
  comment = '',
  rowSpan,
}: Props) {
  return (
    <TableCell
      content="cell16"
      tdKey="normal"
      isHovered={isHovered}
      text={comment}
      rowSpan={rowSpan}
      alignLeft
    />
  );
}
