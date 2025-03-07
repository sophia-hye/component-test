import React from 'react';
import TableHeader from '@components/molecules/cell/TableHeader';

interface StaticHeadersProps {
  rowSpan: number;
}

export default function StaticHeaders({ rowSpan }: StaticHeadersProps) {
  return (
    <>
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
      <TableHeader content="header1" thKey="comment" rowSpan={rowSpan} />
    </>
  );
}
