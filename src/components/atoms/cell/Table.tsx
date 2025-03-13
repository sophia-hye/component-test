import React from 'react';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@designtokens/systems/sysNumber';
import styled from 'styled-components';

const { tableCell } = sysColor;

interface TableProps {
  children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
  return <Styled.Table>{children}</Styled.Table>;
}

const Styled = {
  Table: styled.table`
    min-width: 1880px;
    color: ${tableCell.text};
    background-color: ${tableCell.normal.default};
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid ${tableCell.line};
    border-radius: ${sysNumber.table.radius.default};

    th,
    td {
      border: 1px solid ${tableCell.line};
      border-right: none;
      border-bottom: none;
      vertical-align: middle;
      position: relative;
    }

    /* table 직계 border style */
    > tr:first-child {
      th {
        border-top: none;
      }
      th:first-child {
        border-left: none;
      }
      th:last-child {
        border-right: none;
      }
    }

    > tr:last-child {
      td {
        border-bottom: none;
      }
      td:first-child {
        border-left: none;
        border-bottom-left-radius: ${sysNumber.table.radius.default};
      }
      td:last-child {
        border-right: none;
        border-bottom-right-radius: ${sysNumber.table.radius.default};
      }
    }

    /* table 내부 div의 border style */
    > div {
      tr:first-child {
        td:first-child {
          border-left: none;
          border-bottom-left-radius: ${sysNumber.table.radius.default};
        }
        td:last-child {
          border-right: none;
          border-bottom-right-radius: ${sysNumber.table.radius.default};
        }
      }
      tr:last-child {
        td {
          border-bottom: none;
          /* border-bottom-left-radius: ${sysNumber.table.radius.default}; */
        }
      }
    }

    > div:first-child {
      tr:first-child {
        th {
          border-top: 1px solid ${tableCell.line};
        }
      }
    }
  `,
};
