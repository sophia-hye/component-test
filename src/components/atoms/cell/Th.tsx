import React from 'react';
import styled, { css } from 'styled-components';
import { sysString } from '@designtokens/systems/sysString';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';

export type ThKeyType = keyof typeof sysString.table;

interface ThProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  thKey?: ThKeyType;
  alignLeft?: boolean;
  channelIndex?: ChannelNumberType;
  testTransformOff?: boolean;
  isColorbar?: boolean;
  needVibrantColor: boolean;
}

const Th = styled.th<ThProps>`
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};
  text-transform: ${({ testTransformOff }) =>
    testTransformOff ? 'none' : 'capitalize'};

  ${({ isColorbar }) =>
    isColorbar &&
    css`
      height: 8px !important;
      padding: 0 !important;
      line-height: 8px;
      overflow: hidden;
      max-height: 8px;
      box-sizing: border-box;

      > div {
        height: 8px;
        padding: 0 !important;
        line-height: 8px;
        overflow: hidden;
        max-height: 8px;
        box-sizing: border-box;
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
    if (!thKey)
      return css`
        width: auto;
      `;

    const width = sysNumber.table.width[thKey];
    return css`
      width: ${width};
    `;
  }};
`;

export default Th;
