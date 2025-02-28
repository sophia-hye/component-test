import React from 'react';
import Checkbox from '@/commonui/Checkbox';
// import Selectbox from '@commonui/Selectbox';
import Td, { TdKeyType } from '@components/atoms/cell/Td';
import CellP1 from '@components/atoms/typography/CellP1';
import CellP2 from '@components/atoms/typography/CellP2';
import { sysNumber } from '@designtokens/systems/sysNumber';
import styled from 'styled-components';

type CellContentType = 'checkbox' | 'selectbox' | 'cell16' | 'cell14';

export interface TableCellProps {
  content: CellContentType;
  tdKey: TdKeyType;
  text?: string;
  checked?: boolean;
  alignLeft?: boolean;
  rowSpan?: number;
  colSpan?: number;
}

export default function TableCell(props: TableCellProps) {
  const { rowSpan, colSpan } = props;

  const cellContent = () => {
    const { content } = props;

    if (content === 'checkbox') {
      const isChecked: boolean = props.checked === true;
      return (
        <Checkbox
          status="checked"
          onChange={() => {
            return null;
          }}
        />
      );
    }
    if (content === 'selectbox') {
      // return <Selectbox />
      return null;
    }
    const text = props.text ?? '';
    if (content === 'cell16') {
      return <CellP1 text={text} />;
    }
    if (content === 'cell14') {
      return <CellP2 text={text} />;
    }
    return null;
  };

  return (
    <Td
      rowSpan={rowSpan}
      colSpan={colSpan}
      tdKey={props.tdKey}
      alignLeft={props.alignLeft}
    >
      <Styled.Container className={props.content}>
        {cellContent()}
      </Styled.Container>
    </Td>
  );
}

const Styled = {
  Container: styled.div`
    .checkbox {
      width: ${sysNumber.table.width.checkbox};
      height: ${sysNumber.table.height.checkbox};
      padding: ${sysNumber.table.padding.default};
    }

    .selectbox {
    }

    .cell16 {
    }

    .cell14 {
    }
  `,
};
