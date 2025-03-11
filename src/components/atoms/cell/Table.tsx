import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';
import styled from 'styled-components';

const { tableCell } = sysColor;

interface TableProps {
  children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
  return (
    <Styled.Container>
      <Styled.Table>{children}</Styled.Table>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.div`
    display: inline-block;
    border: 1px solid ${tableCell.line};
    border-radius: ${sysNumber.table.radius.default};
    overflow: hidden;
  `,
  Table: styled.table`
    min-width: 1880px;
    color: ${tableCell.text};
    background-color: ${tableCell.normal.default};

    border-collapse: collapse;
    border-style: hidden;

    th,
    td {
      border: 1px solid ${tableCell.line};
      vertical-align: middle;
    }
  `,
};
