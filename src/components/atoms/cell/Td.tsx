import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import styled, { css } from 'styled-components';

export type TdKeyType = keyof Pick<
  typeof sysColor.tableCell,
  'invalid' | 'positive' | 'homo' | 'het' | 'normal'
>;

interface ITd {
  tdKey: TdKeyType;
  alignLeft?: boolean;
}

const Td = styled.td<ITd>`
  text-align: ${({ alignLeft }) => (alignLeft ? 'left' : 'center')};
  ${({ tdKey }) => {
    const textColor = tdKey === 'positive' ? sysColor.white : undefined;
    return css`
      color: ${textColor};
      background-color: ${sysColor.tableCell[tdKey].default};

      &:hover {
        background-color: ${sysColor.tableCell[tdKey].hovered};
      }
      /** TODO: selected 배경색 설정 필요 */
    `;
  }}
`;

export default Td;
