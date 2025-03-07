import React from 'react';
import HeaderBase from './HeaderBase';
import HeaderChannel from './HeaderChannel';
import HeaderTarget from './HeaderTarget';
import HeaderUnit from './HeaderUnit';
import TableHeaderType from '../header.type';

interface RowHeaderBasicProps {
  useCheckbox: boolean;
  channelInfos: TableHeaderType.ChannelInfo[];
  targetInfos: TableHeaderType.TargetInfo[];
}

export default function RowHeaderBasic({
  useCheckbox,
  channelInfos,
  targetInfos,
}: RowHeaderBasicProps) {
  const useTargetUnit: boolean =
    targetInfos.map(info => info.targetUnit).length > 0;
  const rowSpan = useTargetUnit ? 3 : 4;

  return (
    <>
      <HeaderBase
        rowSpan={rowSpan}
        useCheckbox={useCheckbox}
        channelInfos={channelInfos}
      />
      <HeaderChannel channelInfos={channelInfos} />
      <HeaderTarget targetInfos={targetInfos} />
      <HeaderUnit targetInfos={targetInfos} />
    </>
  );
}
