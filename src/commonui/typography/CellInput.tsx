import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface CellInputProps {
  children: string;
}

export default function CellInput({ children }: CellInputProps) {
  return <Styled.Container>{children}</Styled.Container>;
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
