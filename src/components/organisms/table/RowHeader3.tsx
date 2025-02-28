import React from 'react';
import Tr from 'src/components/atoms/cell/Tr';
import TableHeader from 'src/components/molecules/cell/TableHeader';
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
