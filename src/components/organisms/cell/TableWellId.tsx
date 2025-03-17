import React from 'react';
import TableCell from '@/components/molecules/cell/CellBody';

interface Props {
  isHovered: boolean;
  wellId: string;
  isMerged?: boolean;
}

export default function TableWellId({
  isHovered,
  wellId,
  isMerged = false,
}: Props) {
  const rowSpan: number | undefined = isMerged ? 2 : undefined;

  return (
    <TableCell
      content="cell16"
      tdKey="normal"
      isHovered={isHovered}
      text={wellId}
      rowSpan={rowSpan}
    />
  );
}
