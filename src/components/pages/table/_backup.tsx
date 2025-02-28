import TableCell from '@components/molecules/cell/TableCell';
import TableHeader from '@components/molecules/cell/TableHeader';
import React from 'react';

export default function Backup() {
  return (
    <div>
      <table>
        <tr>
          <TableHeader content="checkbox" rowSpan={3} />
          <TableHeader content="header1" text="No." rowSpan={3} />
          <TableHeader content="header1" text="Well" rowSpan={3} />
          <TableHeader content="header1" text="Sample Id" rowSpan={3} />
          <TableHeader content="header1" text="Result" rowSpan={3} />
          <TableHeader content="header1" text="Type" rowSpan={3} />
          <TableHeader content="colorbar" channelIndex={1} colSpan={2} />
          <TableHeader content="colorbar" channelIndex={2} />
          <TableHeader content="colorbar" channelIndex={3} colSpan={2} />
          <TableHeader content="colorbar" channelIndex={4} />
          <TableHeader content="colorbar" channelIndex={5} />
          <TableHeader content="header1" text="Comment" rowSpan={3} />
        </tr>
        <tr>
          <TableHeader
            content="header1"
            text="FAM"
            channelIndex={1}
            colSpan={2}
          />
          <TableHeader content="header1" text="HEX" channelIndex={2} />
          <TableHeader
            content="header1"
            text="Cal Red 610"
            channelIndex={3}
            colSpan={2}
          />
          <TableHeader content="header1" text="Quasar 670" channelIndex={4} />
          <TableHeader content="header1" text="Quasar 705" channelIndex={5} />
        </tr>
        <tr>
          <TableHeader content="header2" text="Flu A" channelIndex={1} />
          <TableHeader content="header2" text="Flu A1" channelIndex={1} />
          <TableHeader content="header2" text="Flu B" channelIndex={2} />
          <TableHeader content="header2" text="RSV" channelIndex={3} />
          <TableHeader content="header2" text="RSV 12" channelIndex={3} />
          <TableHeader content="header2" text="S gene" channelIndex={4} />
          <TableHeader content="header2" text="RdRP gene" channelIndex={5} />
        </tr>
        <tr>
          <TableCell content="checkbox" tdKey="normal" checked />
          <TableCell content="cell16" tdKey="normal" text="1" />
          <TableCell content="cell16" tdKey="normal" text="A01" />
          <TableCell content="cell16" tdKey="normal" text="test patient id" />
          <TableCell
            content="cell16"
            tdKey="normal"
            text="Negative"
            alignLeft
          />
          <TableCell content="cell16" tdKey="normal" text="Sample" />
          <TableCell content="cell16" tdKey="normal" text="24.57" />
          <TableCell content="cell16" tdKey="normal" text="N/A" />
          <TableCell content="cell16" tdKey="normal" text="N/A" />
          <TableCell content="cell16" tdKey="normal" text="++" />
          <TableCell content="cell16" tdKey="normal" text="24.92" />
          <TableCell content="cell16" tdKey="normal" text="24.92" />
          <TableCell content="cell16" tdKey="normal" text="11.28" />
          <TableCell
            content="cell16"
            tdKey="normal"
            text="commdkwelfirjalsdifj"
          />
        </tr>
      </table>
    </div>
  );
}
