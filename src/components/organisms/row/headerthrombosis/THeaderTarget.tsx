import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface THeaderTargetProps {
  targetInfos: TableHeaderType.TargetInfo[];
  targetNames: string[];
}

export default function THeaderTarget({
  targetInfos,
  targetNames,
}: THeaderTargetProps) {
  return (
    <Tr>
      {targetNames.map(targetName => (
        <TableHeader
          key={`table-header-result-target-${targetName}`}
          content="header2"
          text={targetName}
        />
      ))}
      {targetInfos.map(info => (
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
