import React from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface HeaderChannelProps {
  channelInfos: TableHeaderType.ChannelInfo[];
}

export default function HeaderChannel({ channelInfos }: HeaderChannelProps) {
  return (
    <Tr>
      {channelInfos.map(info => (
        <TableHeader
          key={`table-header-channel-${info.channelIndex}-${info.channelName}`}
          content="header1"
          channelIndex={info.channelIndex}
          text={info.channelName}
          colSpan={info.colSpan}
        />
      ))}
    </Tr>
  );
}
