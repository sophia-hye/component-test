import React from 'react';
import TableHeaderType from './header.type';
import RowHeaderBasic from './header/RowHeaderBasic';
import RowHeaderMerge from './header/RowHeaderMerge';
import RowHeaderThrombosis from './headerthrombosis/RowHeaderThrombosis';

interface RowHeaderProps {
  tableType: 'basic' | 'thrombosis' | 'merge';
  useCheckbox: boolean;
  HeaderInfos: TableHeaderType.TableHeader[];
  ResultInfos?: TableHeaderType.ResultInfo[];
}

export default function RowHeader({
  tableType,
  useCheckbox = false,
  HeaderInfos,
  ResultInfos,
}: RowHeaderProps) {
  const channelInfos: TableHeaderType.ChannelInfo[] = HeaderInfos.map(info => ({
    channelIndex: info.channelIndex,
    channelName: info.channelName,
    colSpan: info.colSpan,
  }));
  const targetInfos: TableHeaderType.TargetInfo[] = HeaderInfos.map(
    channel =>
      channel.targetInfo?.map(info => ({
        channelIndex: channel.channelIndex,
        targetName: info.targetName,
        targetUnit: info.targetUnit,
      })) || [],
  ).flat();

  switch (tableType) {
    case 'thrombosis':
      const geneNames: string[] = ResultInfos
        ? ResultInfos.map(info => info.geneName)
        : [];
      const targetNames: string[] = ResultInfos
        ? ResultInfos.map(info => info.targetName)
        : [];
      return (
        <RowHeaderThrombosis
          useCheckbox={useCheckbox}
          channelInfos={channelInfos}
          targetInfos={targetInfos}
          geneNames={geneNames}
          targetNames={targetNames}
        />
      );
    case 'merge':
      return (
        <RowHeaderMerge useCheckbox={useCheckbox} channelInfos={channelInfos} />
      );
    default:
      return (
        <RowHeaderBasic
          useCheckbox={useCheckbox}
          channelInfos={channelInfos}
          targetInfos={targetInfos}
        />
      );
  }
}
