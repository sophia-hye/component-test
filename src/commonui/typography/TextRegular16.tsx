import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextRegular16({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { regular_16 } = sysTypography.common;

const Styled = {
  Container: styled.span`
    font-family: ${regular_16.fontFamily};
    font-weight: ${regular_16.fontWeight};
    font-size: ${regular_16.fontSize};
    line-height: ${regular_16.lineHeight};
    letter-spacing: ${regular_16.letterSpacing};
  `,
};
