import React from 'react';
import TableCell from '@/components/molecules/cell/CellBody';

interface Props {
  isHovered: boolean;
  value: string;
  isThrombosisAssay?: boolean;
}

export default function TableTarget({
  isHovered,
  value,
  isThrombosisAssay = false,
}: Props) {
  const meltPositives = ['+', '++', '+++'];

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
}
