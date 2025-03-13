import React from 'react';
import TableHeader from '@/components/molecules/cell/TableHeader';

interface Props {
  targetName: string;
  channelIndex: ChannelNumberType;
}

export default function TableTarget({ targetName, channelIndex }: Props) {
  return (
    <TableHeader
      key={`table-cell-header-${targetName}`}
      content="header2"
      thKey="target"
      channelIndex={channelIndex}
      text={targetName}
    />
  );
}
