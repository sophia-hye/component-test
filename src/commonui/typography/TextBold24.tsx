import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextBold24({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { bold_24 } = sysTypography.common;

const Styled = {
  Container: styled.span`
    font-family: ${bold_24.fontFamily};
    font-weight: ${bold_24.fontWeight};
    font-size: ${bold_24.fontSize};
    line-height: ${bold_24.lineHeight};
    letter-spacing: ${bold_24.letterSpacing};
  `,
};
