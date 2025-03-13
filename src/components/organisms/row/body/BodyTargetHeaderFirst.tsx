import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableCheckbox from '../../cell/TableCheckbox';
import TableNo from '../../cell/TableNo';
import TableWellId from '../../cell/TableWellId';
import TableSampleId from '../../cell/TableSampleId';
import TableResult from '../../cell/TableResult';
import TableType from '../../cell/TableType';
import TableComment from '../../cell/TableComment';
import TableTargetName from '../../cell/TableTargetName';

interface Props {
  isHovered: boolean;
  mergedWellNumber: number;
  rowIndex: number;
  wellId: string;
  sampleId?: string;
  result?: string;
  wellType: WellType;
  comment?: string;
  targetHeaderInfo: {
    targetName: string;
    channelIndex: ChannelNumberType;
  }[];
}

export default function BodyTargetHeaderFirst({
  isHovered,
  mergedWellNumber,
  rowIndex,
  wellId,
  sampleId = '',
  result = '',
  wellType,
  comment = '',
  targetHeaderInfo,
}: Props) {
  const rowSpan = mergedWellNumber * 2;
  return (
    <Tr>
      <TableCheckbox isHovered={isHovered} rowSpan={rowSpan} />
      <TableNo isHovered={isHovered} rowIndex={rowIndex} rowSpan={rowSpan} />
      <TableWellId isHovered={isHovered} wellId={wellId} isMerged />
      <TableSampleId
        isHovered={isHovered}
        sampleId={sampleId}
        rowSpan={rowSpan}
      />
      <TableResult isHovered={isHovered} result={result} rowSpan={rowSpan} />
      <TableType isHovered={isHovered} wellType={wellType} rowSpan={rowSpan} />
      {targetHeaderInfo.map(info => (
        <TableTargetName
          targetName={info.targetName}
          channelIndex={info.channelIndex}
        />
      ))}
      <TableComment isHovered={isHovered} comment={comment} rowSpan={rowSpan} />
    </Tr>
  );
}
