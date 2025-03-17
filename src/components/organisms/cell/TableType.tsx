import React from 'react';
import TableCell from '@/components/molecules/cell/CellBody';

interface Props {
  isHovered: boolean;
  wellType: WellType;
  rowSpan?: number;
}

export default function TableType({ isHovered, wellType, rowSpan }: Props) {
  const isUserAuthorization: boolean = true;

  return isUserAuthorization ? (
    <TableCell
      content="selectbox"
      tdKey="normal"
      isHovered={isHovered}
      text={wellType}
      rowSpan={rowSpan}
    />
  ) : (
    <TableCell
      content="cell16"
      tdKey="normal"
      isHovered={isHovered}
      text={wellType}
      rowSpan={rowSpan}
    />
  );
}
