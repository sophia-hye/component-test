import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  direction: 'horizontal' | 'vertical';
  length: number;
}

export default function Divider({ direction, length }: DividerProps) {
  return <Styled.Container direction={direction} length={length} />;
}

const Styled = {
  Container: styled.div<{
    direction: 'horizontal' | 'vertical';
    length: number;
  }>`
    border: 1px solid #bebfde;

    ${({ direction, length }) =>
      direction === 'horizontal' &&
      `
      width: ${length}px;
      height: 1px;
    `}

    ${({ direction, length }) =>
      direction === 'vertical' &&
      `
      width: 1px;
      height: ${length}px;
    `}
  `,
};
