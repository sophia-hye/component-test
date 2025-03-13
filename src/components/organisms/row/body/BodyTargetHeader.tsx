import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableWellId from '../../cell/TableWellId';
import TableTargetName from '../../cell/TableTargetName';

interface Props {
  isHovered: boolean;
  wellId: string;
  targetHeaderInfo: {
    targetName: string;
    channelIndex: ChannelNumberType;
  }[];
}

export default function BodyTargetHeader({
  isHovered,
  wellId,
  targetHeaderInfo,
}: Props) {
  return (
    <Tr>
      <TableWellId isHovered={isHovered} wellId={wellId} isMerged />
      {targetHeaderInfo.map(info => (
        <TableTargetName
          targetName={info.targetName}
          channelIndex={info.channelIndex}
        />
      ))}
    </Tr>
  );
}
