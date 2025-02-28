import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface CellP2Props {
  text: string;
}

export default function CellP2({ text }: CellP2Props) {
  return <Styled.Container>{text}</Styled.Container>;
}

const { table } = sysTypography2;

const Styled = {
  Container: styled.div`
    font-family: ${table.fontFamily.default};
    font-weight: ${table.fontWeight.regular};
    font-size: ${table.fontSize.small};
    line-height: ${table.lineHeight.small};
    letter-spacing: ${table.letterSpacing.default};
  `,
};
