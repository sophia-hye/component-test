import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface THeaderTargetProps {
  thromboHeaders: TableHeaderType.ThromboHeader[];
  targetNames: string[];
}

export default function THeaderTarget({
  thromboHeaders,
  targetNames,
}: THeaderTargetProps) {
  return (
    <Tr>
      {/* Result Column */}
      {targetNames.map(targetName => (
        <TableHeader
          key={`table-header-result-target-${targetName}`}
          content="header2"
          text={targetName}
        />
      ))}
      {/* Channel Columns */}
      {thromboHeaders.map(
        info =>
          info.targetName !== '' && (
            <TableHeader
              key={`table-header-target-${info.channelIndex}-${info.targetName}`}
              content="header2"
              channelIndex={info.channelIndex}
              text={info.targetName}
            />
          ),
      )}
    </Tr>
  );
}
