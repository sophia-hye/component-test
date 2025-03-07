import React from 'react';
import HeaderBase from './HeaderBase';
import HeaderChannel from './HeaderChannel';
import HeaderTarget from './HeaderTarget';
import HeaderUnit from './HeaderUnit';
import TableHeaderType from '../header.type';

interface RowHeaderBasicProps {
  useCheckbox: boolean;
  channelHeaders: TableHeaderType.ChannelHeader[];
  targetHeaders: TableHeaderType.TargetHeader[];
}

export default function RowHeaderBasic({
  useCheckbox,
  channelHeaders,
  targetHeaders,
}: RowHeaderBasicProps) {
  const useTargetUnit: boolean =
    targetHeaders.map(info => info.targetUnit).length > 0;
  const rowSpan = useTargetUnit ? 4 : 3;

  return (
    <>
      <HeaderBase
        rowSpan={rowSpan}
        useCheckbox={useCheckbox}
        channelHeaders={channelHeaders}
      />
      <HeaderChannel channelHeaders={channelHeaders} />
      <HeaderTarget targetHeaders={targetHeaders} />
      <HeaderUnit targetHeaders={targetHeaders} />
    </>
  );
}
