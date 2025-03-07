import React from 'react';
import THeaderBase from './THeaderBase';
import THeaderChannel from './THeaderChannel';
import THeaderGene from './THeaderGene';
import THeaderTarget from './THeaderTarget';
import TableHeaderType from '../header.type';

interface RowHeaderThrombosisProps {
  useCheckbox: boolean;
  channelInfos: TableHeaderType.ChannelInfo[];
  targetInfos: TableHeaderType.TargetInfo[];
  geneNames: string[];
  targetNames: string[];
}

export default function RowHeaderThrombosis({
  useCheckbox,
  channelInfos,
  targetInfos,
  geneNames,
  targetNames,
}: RowHeaderThrombosisProps) {
  return (
    <>
      <THeaderBase
        rowSpan={4}
        useCheckbox={useCheckbox}
        channelInfos={channelInfos}
      />
      <THeaderChannel channelInfos={channelInfos} />
      <THeaderGene targetInfos={targetInfos} geneNames={geneNames} />
      <THeaderTarget targetInfos={targetInfos} targetNames={targetNames} />
    </>
  );
}
