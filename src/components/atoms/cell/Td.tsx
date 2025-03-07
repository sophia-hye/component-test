import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import styled, { css } from 'styled-components';

export type TdKeyType = keyof Pick<
  typeof sysColor.tableCell,
  'invalid' | 'positive' | 'homo' | 'het' | 'normal'
>;

interface TdProps {
  tdKey: TdKeyType;
  isHovered: boolean;
  alignLeft?: boolean;
}

const Td = styled.td<TdProps>`
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};
  ${({ tdKey, isHovered }) => {
    const textColor = tdKey === 'positive' ? sysColor.white : undefined;
    return css`
      color: ${textColor};
      background-color: ${isHovered
        ? sysColor.tableCell[tdKey].hovered
        : sysColor.tableCell[tdKey].default};
      /* background-color: isHovered ? ${sysColor.tableCell[tdKey].hovered}:
        ${sysColor.tableCell[tdKey].default}; */

      /** TODO: selected 배경색 설정 필요 */
    `;
  }}
`;

export default Td;
