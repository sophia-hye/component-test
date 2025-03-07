import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface THeaderGeneProps {
  targetInfos: TableHeaderType.TargetInfo[];
  geneNames: string[];
}

export default function THeaderGene({
  targetInfos,
  geneNames,
}: THeaderGeneProps) {
  return (
    <Tr>
      <TableHeader content="header2" text="C(t)" rowSpan={2} />
      {geneNames.map(geneName => (
        <TableHeader
          key={`table-header-result-gene-${geneName}`}
          content="header2"
          text={geneName}
        />
      ))}

      {targetInfos.map(info => (
        <TableHeader
          key={`table-header-target-${info.targetName}`}
          content="header2"
          channelIndex={info.channelIndex}
          text={info.targetName}
        />
      ))}
    </Tr>
  );
}
