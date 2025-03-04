import React from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import data from './TestData';

export default function RowHeader3() {
  return (
    <Tr>
      {data.map(channel =>
        channel.targetInfo.map(target => (
          <TableHeader
            key={target.name}
            content="header2"
            channelIndex={channel.channelIndex}
            text={target.name}
          />
        )),
      )}
    </Tr>
  );
}
