import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TableBodyType from './body.type';
import BodyTargetHeaderFirst from './body/BodyTargetHeaderFirst';
import BodyTargetHeader from './body/BodyTargetHeader';
import BodyTargetValue from './body/BodyTargetValue';

interface RowCellMergeProps {
  bodyMergedData: TableBodyType.TableBodyDataMerge;
  useCheckbox?: boolean;
}

export default function RowCellMerge({
  bodyMergedData,
  useCheckbox = true,
}: RowCellMergeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sortedWellIds = Object.keys(bodyMergedData.mergedWellInfo).sort(
    (a, b) => {
      const rowA = a.charAt(0);
      const rowB = b.charAt(0);
      const colA = a.slice(1);
      const colB = b.slice(1);

      if (rowA !== rowB) {
        return rowA.localeCompare(rowB);
      }
      return parseInt(colA) - parseInt(colB);
    },
  ) as WellId[];

  useEffect(() => {
    console.log('Merged Row Hover Test: ', isHovered);
  }, [isHovered]);

  return (
    <RowGroup
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {sortedWellIds.map((wellId, idx) => {
        const mergedRow: React.ReactNode[] = [];

        const targetHeaderInfo =
          bodyMergedData.mergedWellInfo[wellId]?.map(info => ({
            targetName: info.targetName,
            channelIndex: info.channelIndex,
          })) ?? [];

        const targetResults =
          bodyMergedData.mergedWellInfo[wellId]?.map(
            info => info.targetResult,
          ) ?? [];

        if (idx === 0) {
          mergedRow.push(
            <BodyTargetHeaderFirst
              key={`header-${wellId}`}
              isHovered={isHovered}
              mergedWellNumber={sortedWellIds.length}
              wellId={wellId}
              targetHeaderInfo={targetHeaderInfo}
              {...bodyMergedData}
            />,
          );
        } else {
          mergedRow.push(
            <BodyTargetHeader
              key={`header-${wellId}`}
              isHovered={isHovered}
              wellId={wellId}
              targetHeaderInfo={targetHeaderInfo}
            />,
          );
        }

        mergedRow.push(
          <BodyTargetValue
            key={`value-${wellId}`}
            isHovered={isHovered}
            targetResults={targetResults}
          />,
        );
        return mergedRow;
      })}
    </RowGroup>
  );
}

const RowGroup = styled.div`
  display: contents;
`;
