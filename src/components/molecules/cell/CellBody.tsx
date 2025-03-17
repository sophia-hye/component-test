import React from 'react';
import Td, { TdKeyType } from '@components/atoms/cell/Td';
import TextB1 from '@/commonui/typography/TextB1';
import TextB2 from '@/commonui/typography/TextB2';
import Checkbox from '@/commonui/Checkbox';
import Selectbox from '@/commonui/Selectbox';
import TableSelectbox from '@/commonui/TableSelectbox';

type CellContentType = 'checkbox' | 'selectbox' | 'cell16' | 'cell14';

export interface Props {
  content: CellContentType;
  tdKey: TdKeyType;
  isHovered: boolean;
  text?: string;
  checked?: boolean;
  alignLeft?: boolean;
  rowSpan?: number;
  colSpan?: number;
  onCheckboxChange?: (checked: boolean) => void;
}

export default function CellBody(props: Props) {
  const { rowSpan, colSpan, onCheckboxChange } = props;

  const cellContent = () => {
    const { content, checked } = props;

    if (content === 'checkbox') {
      return (
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onChange={() => onCheckboxChange?.(!checked)}
        />
      );
    }
    if (content === 'selectbox') {
      return <TableSelectbox />;
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
      isSelected={props.content === 'selectbox'}
    >
      {cellContent()}
    </Td>
  );
}
