import React from 'react';
import Td, { TdKeyType } from '@components/atoms/cell/Td';
import Checkbox from '@/commonui/Checkbox';
import TextCell16 from '@/commonui/typography/table/TextCell16';
import TextCell14 from '@/commonui/typography/table/TextCell14';
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
      return <TextCell16>{text}</TextCell16>;
    }
    if (content === 'cell14') {
      return <TextCell14>{text}</TextCell14>;
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
