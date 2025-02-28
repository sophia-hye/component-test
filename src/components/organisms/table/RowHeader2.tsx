import React from 'react';
import Tr from 'src/components/atoms/cell/Tr';
import TableHeader from 'src/components/molecules/cell/TableHeader';
import data from './TestData';

export default function RowHeader2() {
  return (
    <Tr>
      {data.map(channel => (
        <TableHeader
          key={`channel${channel.channelIndex}`}
          content="header1"
          channelIndex={channel.channelIndex}
          text={channel.name}
          colSpan={channel.colSpan}
        />
      ))}
    </Tr>
  );
}
