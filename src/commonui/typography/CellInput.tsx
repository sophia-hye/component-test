import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface CellInputProps {
  children: string;
}

export default function CellInput({ children }: CellInputProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { input } = sysTypography2;

const Styled = {
  Container: styled.div`
    font-family: ${input.fontFamily.default};
    font-weight: ${input.fontWeight.regular};
    font-size: ${input.fontSize.default};
    line-height: ${input.lineHeight.default};
    letter-spacing: ${input.letterSpacing.default};
  `,
};
