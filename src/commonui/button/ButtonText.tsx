import React from 'react';
import { sysTypography2 } from '@designtokens/systems/sysTypography2';
import styled from 'styled-components';

interface ButtonTextProps {
  children: string;
}

export default function ButtonText({ children }: ButtonTextProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { button } = sysTypography2;

const Styled = {
  Container: styled.div`
    text-align: center;

    font-family: ${button.fontFamily.default};
    font-weight: ${button.fontWeight.medium};
    font-size: ${button.fontSize.default};
    line-height: ${button.lineHeight.default};
    letter-spacing: ${button.letterSpacing.default};
  `,
};
