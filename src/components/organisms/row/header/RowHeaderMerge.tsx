import React from 'react';
import HeaderBase from './HeaderBase';
import HeaderChannel from './HeaderChannel';
import TableHeaderType from '../header.type';

interface RowHeaderMergeProps {
  useCheckbox: boolean;
  channelHeaders: TableHeaderType.ChannelHeader[];
}

export default function RowHeaderMerge({
  useCheckbox,
  channelHeaders,
}: RowHeaderMergeProps) {
  const rowSpan = 2;
  return (
    <>
      <HeaderBase
        rowSpan={rowSpan}
        useCheckbox={useCheckbox}
        channelHeaders={channelHeaders}
      />
      <HeaderChannel channelHeaders={channelHeaders} />
    </>
  );
}
