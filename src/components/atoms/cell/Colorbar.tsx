import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import styled from 'styled-components';

interface ColorbarProps {
  channelIndex: ChannelNumberType;
}

export default function Colorbar({ channelIndex }: ColorbarProps) {
  return <Styled.Container channelIndex={channelIndex} />;
}

const Styled = {
  Container: styled.div<{ channelIndex: ChannelNumberType }>`
    content: '';
    width: '100%';
    height: '8px';
    background-color: ${({ channelIndex }) =>
      sysColor.tableCell[`channel${channelIndex}`].color1};
  `,
};
