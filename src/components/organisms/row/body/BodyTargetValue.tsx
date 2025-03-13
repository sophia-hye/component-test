import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableTarget from '../../cell/TableTarget';

interface Props {
  isHovered: boolean;
  targetResults: string[];
}

export default function BodyTargetValue({ isHovered, targetResults }: Props) {
  return (
    <Tr>
      {targetResults.map(result => (
        <TableTarget isHovered={isHovered} value={result} />
      ))}
    </Tr>
  );
}
