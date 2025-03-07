import React from 'react';
import THeaderBase from './THeaderBase';
import THeaderChannel from './THeaderChannel';
import THeaderGene from './THeaderGene';
import THeaderTarget from './THeaderTarget';
import TableHeaderType from '../header.type';

interface RowHeaderThrombosisProps {
  useCheckbox: boolean;
  channelHeaders: TableHeaderType.ChannelHeader[];
  thromboHeaders: TableHeaderType.ThromboHeader[];
  thromboResultHeaders: TableHeaderType.Thrombo[];
}

export default function RowHeaderThrombosis({
  useCheckbox,
  channelHeaders,
  thromboHeaders,
  thromboResultHeaders,
}: RowHeaderThrombosisProps) {
  const geneNames: string[] = thromboResultHeaders
    ? thromboResultHeaders.map(info => info.geneName)
    : [];
  const targetNames: string[] = thromboResultHeaders
    ? thromboResultHeaders.map(info => info.targetName)
    : [];

  return (
    <>
      <THeaderBase
        rowSpan={4}
        useCheckbox={useCheckbox}
        channelHeaders={channelHeaders}
      />
      <THeaderChannel channelHeaders={channelHeaders} />
      <THeaderGene thromboHeaders={thromboHeaders} geneNames={geneNames} />
      <THeaderTarget
        thromboHeaders={thromboHeaders}
        targetNames={targetNames}
      />
    </>
  );
}
