import React from 'react';
import styled, { css } from 'styled-components';
import { sysString } from '@designtokens/systems/sysString';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';

export type ThKeyType = keyof typeof sysString.table;

interface ITh {
  thKey?: ThKeyType;
  alignLeft?: boolean;
  channelIndex?: ChannelNumberType;
  needVibrantColor: boolean;
}

const Th = styled.th<ITh>`
  text-transform: capitalize;
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};

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
    const defaultWidth = css`
      width: 'auto';
    `;

    if (!thKey) return defaultWidth;

    const width = sysNumber.table.width[thKey];
    return css`
      min-width: ${width};
    `;
  }}
`;

export default Th;
