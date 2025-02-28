import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface CellP1Props {
  text: string;
}

export default function CellP1({ text }: CellP1Props) {
  return <Styled.Container>{text}</Styled.Container>;
}

const { table } = sysTypography2;

const Styled = {
  Container: styled.div`
    font-family: ${table.fontFamily.default};
    font-weight: ${table.fontWeight.regular};
    font-size: ${table.fontSize.default};
    line-height: ${table.lineHeight.default};
    letter-spacing: ${table.letterSpacing.default};
  `,
};
