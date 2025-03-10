import React from 'react';
import { sysNumber } from '@designtokens/systems/sysNumber';
import Th, { ThKeyType } from '@components/atoms/cell/Th';
import Checkbox from '@/commonui/Checkbox';
import Colorbar from '@components/atoms/cell/Colorbar';
import CellH1 from '@components/atoms/typography/CellH1';
import CellH2 from '@components/atoms/typography/CellH2';
import { sysString } from '@designtokens/systems/sysString';
import styled from 'styled-components';

type HeaderContentType = 'colorbar' | 'checkbox' | 'header1' | 'header2';

export interface TableHeaderProps {
  content: HeaderContentType;
  thKey?: ThKeyType;
  text?: string;
  checked?: boolean;
  alignLeft?: boolean;
  testTransformOff?: boolean;
  channelIndex?: ChannelNumberType;
  rowSpan?: number;
  colSpan?: number;
}

export default function TableHeader(props: TableHeaderProps) {
  const { rowSpan, colSpan, content } = props;
  const isColorbar = content === 'colorbar';

  const paddingValue = (content: HeaderContentType) => {
    switch (content) {
      case 'colorbar':
        return '0';
      case 'header2':
        return `${sysNumber.table.padding.small} ${sysNumber.table.padding.default}`;
      default:
        return sysNumber.table.padding.default;
    }
  };

  return (
    <Th
      thKey={props.thKey}
      alignLeft={props.alignLeft}
      channelIndex={props.channelIndex}
      testTransformOff={props.testTransformOff}
      isColorbar={isColorbar}
      needVibrantColor={isColorbar}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      <Container paddingValue={paddingValue(content)}>
        {headerContent({ ...props })}
      </Container>
    </Th>
  );
}

const Container = styled.div<{ paddingValue: string }>`
  padding: ${({ paddingValue }) => paddingValue};
`;

const headerContent = (props: TableHeaderProps) => {
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
    const defaultText = props.thKey ? sysString.table[props.thKey] : '';
    return <CellH1 text={props.text ?? defaultText} />;
  }
  if (content === 'header2') {
    const text = props.text ?? '';
    return <CellH2 text={text} />;
  }

  return <></>;
};
