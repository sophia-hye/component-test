import React from 'react';
import Tr from '@/components/atoms/cell/Tr';
import TableHeader from '@components/molecules/cell/TableHeader';
import TableHeaderType from '../header.type';

interface THeaderGeneProps {
  thromboHeaders: TableHeaderType.ThromboHeader[];
  geneNames: string[];
}

export default function THeaderGene({
  thromboHeaders,
  geneNames,
}: THeaderGeneProps) {
  const channelSet = new Set();

  return (
    <Tr>
      {/* Result Column */}
      <TableHeader content="header2" text="C(t)" rowSpan={2} />
      {geneNames.map(geneName => (
        <TableHeader
          key={`table-header-result-gene-${geneName}`}
          content="header2"
          text={geneName}
        />
      ))}
      {/* Channel Columns */}
      {thromboHeaders.map(info => {
        if (info.geneName === 'C(t)') {
          return (
            <TableHeader
              key={`table-header-target-${info.geneName}`}
              content="header2"
              channelIndex={info.channelIndex}
              text={info.geneName}
              rowSpan={2}
            />
          );
        }
        return (
          <TableHeader
            key={`table-header-target-${info.geneName}`}
            content="header2"
            channelIndex={info.channelIndex}
            text={info.geneName}
          />
        );
      })}
    </Tr>
  );
}
