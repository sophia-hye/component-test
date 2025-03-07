import React from 'react';
import HeaderBase from './HeaderBase';
import HeaderChannel from './HeaderChannel';
import TableHeaderType from '../header.type';

interface RowHeaderMergeProps {
  useCheckbox: boolean;
  channelInfos: TableHeaderType.ChannelInfo[];
}

export default function RowHeaderMerge({
  useCheckbox,
  channelInfos,
}: RowHeaderMergeProps) {
  const rowSpan = 2;
  return (
    <>
      <HeaderBase
        rowSpan={rowSpan}
        useCheckbox={useCheckbox}
        channelInfos={channelInfos}
      />
      <HeaderChannel channelInfos={channelInfos} />
    </>
  );
}
