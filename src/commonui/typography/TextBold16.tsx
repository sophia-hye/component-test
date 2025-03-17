import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextBold16({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { bold_16 } = sysTypography.common;

const Styled = {
  Container: styled.span`
    font-family: ${bold_16.fontFamily};
    font-weight: ${bold_16.fontWeight};
    font-size: ${bold_16.fontSize};
    line-height: ${bold_16.lineHeight};
    letter-spacing: ${bold_16.letterSpacing};
  `,
};
