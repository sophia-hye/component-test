import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface HeaderUnitProps {
  targetHeaders: TableHeaderType.TargetHeader[];
}

export default function HeaderUnit({ targetHeaders }: HeaderUnitProps) {
  return (
    <Tr>
      {targetHeaders.map(info => (
        <TableHeader
          key={`table-header-unit-${info.channelIndex}-${info.targetUnit}`}
          content="header2"
          channelIndex={info.channelIndex}
          text={info.targetUnit}
        />
      ))}
    </Tr>
  );
}
