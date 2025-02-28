import React from 'react';
import Tr from 'src/components/atoms/cell/Tr';
import TableHeader from 'src/components/molecules/cell/TableHeader';
import data from './TestData';

interface RowHeader1Props {
  rowSpan: number;
}

export default function RowHeader1({ rowSpan }: RowHeader1Props) {
  return (
    <Tr>
      <TableHeader
        content="checkbox"
        thKey="checkbox"
        checked={false}
        rowSpan={rowSpan}
      />
      <TableHeader content="header1" thKey="no" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="well" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="sampleId" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="result" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="type" rowSpan={rowSpan} />
      {data.map(channel => (
        <TableHeader
          key={`colorbar${channel.channelIndex}`}
          content="colorbar"
          channelIndex={channel.channelIndex}
          colSpan={channel.colSpan}
        />
      ))}
      <TableHeader content="header1" thKey="comment" rowSpan={rowSpan} />
    </Tr>
  );
}
