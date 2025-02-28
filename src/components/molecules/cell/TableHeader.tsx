import React from 'react';
import styled from 'styled-components';
import { sysNumber } from '@designtokens/systems/sysNumber';
import Th, { ThKeyType } from '@components/atoms/cell/Th';
import Checkbox from '@/commonui/Checkbox';
import Colorbar from '@components/atoms/cell/Colorbar';
import CellH1 from '@components/atoms/typography/CellH1';
import CellH2 from '@components/atoms/typography/CellH2';
import { sysString } from '@designtokens/systems/sysString';

type HeaderContentType = 'colorbar' | 'checkbox' | 'header1' | 'header2';

export interface TableHeaderProps {
  content: HeaderContentType;
  thKey?: ThKeyType;
  text?: string;
  checked?: boolean;
  alignLeft?: boolean;
  channelIndex?: ChannelNumberType;
  rowSpan?: number;
  colSpan?: number;
}

export default function TableHeader(props: TableHeaderProps) {
  const { rowSpan, colSpan } = props;

  const headerContent = () => {
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
    if (content === 'colorbar') {
      const chIdx: ChannelNumberType = props.channelIndex ?? 1;
      return <Colorbar channelIndex={chIdx} />;
    }
    if (content === 'header1') {
      const text = props.thKey ? sysString.table[props.thKey] : '';
      return <CellH1 text={text} />;
    }
    if (content === 'header2') {
      const text = props.text ?? '';
      return <CellH2 text={text} />;
    }

    return null;
  };

  return (
    <Th
      rowSpan={rowSpan}
      colSpan={colSpan}
      thKey={props.thKey}
      alignLeft={props.alignLeft}
      channelIndex={props.channelIndex}
      needVibrantColor={props.content === 'colorbar'}
    >
      <Styled.Container className={props.content}>
        {headerContent()}
      </Styled.Container>
    </Th>
  );
}

const Styled = {
  Container: styled.div`
    .checkbox {
      padding: ${sysNumber.table.padding.default};
    }

    .colorbar {
      height: 8px;
      padding: ${sysNumber.table.padding.default};
    }

    .header1 {
      padding: ${sysNumber.table.padding.default};
    }

    .header2 {
      padding: ${() =>
        `${sysNumber.table.padding.small} ${sysNumber.table.padding.default}`};
    }
  `,
};
