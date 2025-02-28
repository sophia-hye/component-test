import React from 'react';
import styled from 'styled-components';
import { sysColor } from '@/designtokens/systems/sysColor';

const { scrollbar } = sysColor;

const ScrollableContainer = styled.div`
  width: 100%;
  height: 300px; /** 임의의 값 */
  overflow: auto;

  scrollbar-width: 8px;
  scroll-behavior: smooth;
  scroll-padding: 4px;

  border-radius: 8px;
  /** scrollbar thumb color, track color */
  scrollbar-color: ${scrollbar.enabled} ${scrollbar.background};
  &:disabled {
    cursor: not-allowed;
    scrollbar-color: ${scrollbar.disabled} ${scrollbar.background};
  }
`;

export default ScrollableContainer;
