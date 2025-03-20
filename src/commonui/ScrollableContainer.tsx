import React from 'react';
import styled from 'styled-components';
import { sysColor } from '@/designtokens/systems/sysColor';

const { scrollbar } = sysColor;

const ScrollableContainer = styled.div`
  width: fit-content;
  height: 200px;
  padding: 10px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background: ${scrollbar.background};
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background: ${scrollbar.enabled};
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    cursor: pointer;
  }

  /* 스크롤바 화살표 버튼 숨기기 */
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export default ScrollableContainer;
