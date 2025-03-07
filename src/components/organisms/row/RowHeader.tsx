import React from 'react';
import TableHeaderType from './header.type';
import RowHeaderBasic from './header/RowHeaderBasic';
import RowHeaderMerge from './header/RowHeaderMerge';
import RowHeaderThrombosis from './headerthrombosis/RowHeaderThrombosis';

interface RowHeaderProps {
  tableType: 'basic' | 'thrombosis' | 'merge';
  useCheckbox: boolean;
  headerInfos: TableHeaderType.TableHeader[];
  thromboInfos?: TableHeaderType.Thrombo[];
}

export default function RowHeader({
  tableType,
  useCheckbox = false,
  headerInfos,
  thromboInfos,
}: RowHeaderProps) {
  const channelHeaders: TableHeaderType.ChannelHeader[] = headerInfos.map(
    info => ({
      channelIndex: info.channelIndex,
      channelName: info.channelName,
      colSpan: info.colSpan,
    }),
  );

  switch (tableType) {
    case 'thrombosis':
      const thromboHeaders: TableHeaderType.ThromboHeader[] = headerInfos
        .map(
          channel =>
            channel.targetInfo?.map(info => ({
              channelIndex: channel.channelIndex,
              geneName: info.geneName || '',
              targetName: info.targetName,
            })) || [],
        )
        .flat();

      return (
        <RowHeaderThrombosis
          useCheckbox={useCheckbox}
          channelHeaders={channelHeaders}
          thromboHeaders={thromboHeaders}
          thromboResultHeaders={thromboInfos || []}
        />
      );
    case 'merge':
      return (
        <RowHeaderMerge
          useCheckbox={useCheckbox}
          channelHeaders={channelHeaders}
        />
      );
    default:
      const targetHeaders: TableHeaderType.TargetHeader[] = headerInfos
        .map(
          channel =>
            channel.targetInfo?.map(info => ({
              channelIndex: channel.channelIndex,
              targetName: info.targetName,
              targetUnit: info.targetUnit,
            })) || [],
        )
        .flat();
      return (
        <RowHeaderBasic
          useCheckbox={useCheckbox}
          channelHeaders={channelHeaders}
          targetHeaders={targetHeaders}
        />
      );
  }
}
