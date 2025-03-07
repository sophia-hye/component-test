import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface HeaderTargetProps {
  targetHeaders: TableHeaderType.TargetHeader[];
}

export default function HeaderTarget({ targetHeaders }: HeaderTargetProps) {
  return (
    <Tr>
      {targetHeaders.map(info => (
        <TableHeader
          key={`table-header-target-${info.targetName}`}
          content="header2"
          channelIndex={info.channelIndex}
          text={info.targetName}
        />
      ))}
    </Tr>
  );
}
