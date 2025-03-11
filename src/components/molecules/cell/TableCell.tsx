import React from 'react';
import Td, { TdKeyType } from '@components/atoms/cell/Td';
import TextB1 from '@/commonui/typography/TextB1';
import TextB2 from '@/commonui/typography/TextB2';
import Checkbox from '@/commonui/Checkbox';
import Selectbox from '@/commonui/Selectbox';

type CellContentType = 'checkbox' | 'selectbox' | 'cell16' | 'cell14';

export interface TableCellProps {
  content: CellContentType;
  tdKey: TdKeyType;
  isHovered: boolean;
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
      return <Selectbox />;
      return null;
    }
    const text = props.text ?? '';
    if (content === 'cell16') {
      return <TextB1 text={text} />;
    }
    if (content === 'cell14') {
      return <TextB2 text={text} />;
    }
    return null;
  };

  return (
    <Td
      rowSpan={rowSpan}
      colSpan={colSpan}
      tdKey={props.tdKey}
      isHovered={props.isHovered}
      alignLeft={props.alignLeft}
    >
      {cellContent()}
    </Td>
  );
}
