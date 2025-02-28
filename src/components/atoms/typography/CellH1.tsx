import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface CellH1Props {
  text: string;
}

export default function CellH1({ text }: CellH1Props) {
  return <Styled.Container>{text}</Styled.Container>;
}

const { table } = sysTypography2;

const Styled = {
  Container: styled.div`
    font-family: ${table.fontFamily.default};
    font-weight: ${table.fontWeight.bold};
    font-size: ${table.fontSize.default};
    line-height: ${table.lineHeight.default};
    letter-spacing: ${table.letterSpacing.default};
  `,
};
