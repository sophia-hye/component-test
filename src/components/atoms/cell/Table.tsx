import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';
import styled from 'styled-components';

const { tableCell } = sysColor;

const Table = styled.table`
  color: ${tableCell.text};
  background-color: ${tableCell.normal.default};

  border-collapse: collapse;
  border-radius: ${sysNumber.table.radius.default};
  border: 1px solid ${tableCell.line};

  td, th {
    border: 1px solid ${tableCell.line};
  }
`;

export default Table;
