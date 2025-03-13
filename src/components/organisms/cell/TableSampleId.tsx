import React from 'react';
import TableCell from '@/components/molecules/cell/TableCell';

interface Props {
  isHovered: boolean;
  sampleId?: string;
  rowSpan?: number;
}

export default function TableSampleId({
  isHovered,
  sampleId = '',
  rowSpan,
}: Props) {
  return (
    <TableCell
      content="cell16"
      tdKey="normal"
      isHovered={isHovered}
      text={sampleId}
      rowSpan={rowSpan}
      alignLeft
    />
  );
}
