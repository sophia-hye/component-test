import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';
import styled from 'styled-components';

const { tableCell } = sysColor;

const Table = styled.table`
  min-width: 1880px;
  color: ${tableCell.text};
  background-color: ${tableCell.normal.default};

  box-sizing: border-box;
  border-collapse: collapse;
  border-radius: ${sysNumber.table.radius.default};
  border: 1px solid ${tableCell.line};

  th,
  td {
    border: 1px solid ${tableCell.line};
    vertical-align: middle;
  }
`;

export default Table;
