import React from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableHeader from '@/components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface THeaderBaseProps {
  rowSpan: number;
  useCheckbox: boolean;
  channelHeaders: TableHeaderType.ChannelHeader[];
}

export default function THeaderBase({
  rowSpan,
  useCheckbox,
  channelHeaders,
}: THeaderBaseProps) {
  return (
    <Tr>
      {useCheckbox && (
        <TableHeader
          content="checkbox"
          thKey="checkbox"
          checked={false}
          rowSpan={rowSpan}
        />
      )}
      <TableHeader content="header1" thKey="no" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="well" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="sampleId" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="result" rowSpan={2} colSpan={7} />
      <TableHeader content="header1" thKey="type" rowSpan={rowSpan} />
      {channelHeaders.map(header => (
        <TableHeader
          key={`table-header-colorbar-${header.channelIndex}`}
          content="colorbar"
          channelIndex={header.channelIndex}
          colSpan={header.colSpan}
        />
      ))}
      <TableHeader content="header1" thKey="comment" rowSpan={rowSpan} />
    </Tr>
  );
}
