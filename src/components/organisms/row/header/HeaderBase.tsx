import React from 'react';
import Tr from '@components/atoms/cell/Tr';
import TableHeader from '@/components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface HeaderBaseProps {
  rowSpan: number;
  useCheckbox: boolean;
  channelHeaders: TableHeaderType.ChannelHeader[];
}

export default function HeaderBase({
  rowSpan,
  useCheckbox,
  channelHeaders,
}: HeaderBaseProps) {
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
      <TableHeader content="header1" thKey="result" rowSpan={rowSpan} />
      <TableHeader content="header1" thKey="type" rowSpan={rowSpan} />
      {channelHeaders.map(info => (
        <TableHeader
          key={`table-header-colorbar-${info.channelIndex}`}
          content="colorbar"
          channelIndex={info.channelIndex}
          colSpan={info.colSpan}
        />
      ))}
      <TableHeader content="header1" thKey="comment" rowSpan={rowSpan} />
    </Tr>
  );
}
