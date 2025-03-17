import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextRegular12({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { regular_12 } = sysTypography.common;

const Styled = {
  Container: styled.span`
    font-family: ${regular_12.fontFamily};
    font-weight: ${regular_12.fontWeight};
    font-size: ${regular_12.fontSize};
    line-height: ${regular_12.lineHeight};
    letter-spacing: ${regular_12.letterSpacing};
  `,
};
