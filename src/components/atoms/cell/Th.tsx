import React from 'react';
import styled, { css } from 'styled-components';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';

export type ThKeyType = keyof typeof sysNumber.table.width;

interface ThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  thKey: ThKeyType;
  alignLeft?: boolean;
  channelIndex?: ChannelNumberType;
  testTransformOff?: boolean;
  isColorbar?: boolean;
  needVibrantColor: boolean;
  paddingValue: string;
}

const Th = styled.th<ThProps>`
  padding: ${({ paddingValue }) => paddingValue};
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};
  text-transform: ${({ testTransformOff }) =>
    testTransformOff ? 'none' : 'capitalize'};

  ${({ isColorbar }) =>
    isColorbar &&
    css`
      height: 8px !important;
      line-height: 8px;
      overflow: hidden;

      * {
        height: 8px;
        line-height: 8px;
        overflow: hidden;
      }
    `}

  ${({ channelIndex, needVibrantColor }) => {
    const { tableCell } = sysColor;

    if (!channelIndex) return undefined;

    const bgColor = needVibrantColor
      ? tableCell[`channel${channelIndex}`].color1
      : tableCell[`channel${channelIndex}`].color2;
    return css`
      background-color: ${bgColor};
    `;
  }}
  ${({ thKey }) => {
    const width = sysNumber.table.width[thKey];
    return css`
      width: ${width};
    `;
  }};
`;

export default Th;
