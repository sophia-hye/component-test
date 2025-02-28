import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface CellH2Props {
  text: string;
}

export default function CellH2({ text }: CellH2Props) {
  return <Styled.Container>{text}</Styled.Container>;
}

const { table } = sysTypography2;

const Styled = {
  Container: styled.div`
    font-family: ${table.fontFamily.default};
    font-weight: ${table.fontWeight.medium};
    font-size: ${table.fontSize.small};
    line-height: ${table.lineHeight.small};
    letter-spacing: ${table.letterSpacing.default};
  `,
};
