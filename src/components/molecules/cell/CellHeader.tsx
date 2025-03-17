import React from 'react';
import { sysNumber } from '@designtokens/systems/sysNumber';
import { sysString } from '@designtokens/systems/sysString';
import Th, { ThKeyType } from '@components/atoms/cell/Th';
import Checkbox from '@/commonui/Checkbox';
import Colorbar from '@components/atoms/cell/Colorbar';
import TextHeader16 from '@/commonui/tabletypography/TextHeader16';
import TextHeader14 from '@/commonui/tabletypography/TextHeader14';

type HeaderContentType = 'colorbar' | 'checkbox' | 'header1' | 'header2';

export interface Props {
  content: HeaderContentType;
  thKey: ThKeyType;
  text?: string;
  checked?: boolean;
  alignLeft?: boolean;
  testTransformOff?: boolean;
  channelIndex?: ChannelNumberType;
  rowSpan?: number;
  colSpan?: number;
}

export default function TableHeader(props: Props) {
  const { rowSpan, colSpan, content } = props;
  const isColorbar = content === 'colorbar';

  const paddingValue = (content: HeaderContentType) => {
    switch (content) {
      case 'colorbar':
        return '0';
      case 'header2':
        return `${sysNumber.table.padding.targetCell.top_padding_2} ${sysNumber.table.padding.defaultCell.left_padding_4}`;
      default:
        return sysNumber.table.padding.defaultCell.top_padding_4;
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
      paddingValue={paddingValue(content)}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {headerContent({ ...props })}
    </Th>
  );
}

const headerContent = (props: Props) => {
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
    return <TextHeader16>{props.text ?? defaultText}</TextHeader16>;
  }
  if (content === 'header2') {
    const text = props.text ?? '';
    return <TextHeader14>{text}</TextHeader14>;
  }

  return <></>;
};
