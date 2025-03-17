import React, { useState } from 'react';
import TableCell from '@/components/molecules/cell/CellBody';

interface Props {
  isHovered: boolean;
  checked?: boolean;
  rowSpan?: number;
}

export default function TableCheckbox({
  isHovered,
  checked: initialChecked = false,
  rowSpan,
}: Props) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleCheckChange = (newChecked: boolean) => {
    setIsChecked(newChecked);
  };

  return (
    <TableCell
      content="checkbox"
      tdKey="normal"
      isHovered={isHovered}
      checked={isChecked}
      rowSpan={rowSpan}
      onCheckboxChange={handleCheckChange}
    />
  );
}
