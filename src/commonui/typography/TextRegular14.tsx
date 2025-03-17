import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextRegular14({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { regular_14 } = sysTypography.common;

const Styled = {
  Container: styled.span`
    font-family: ${regular_14.fontFamily};
    font-weight: ${regular_14.fontWeight};
    font-size: ${regular_14.fontSize};
    line-height: ${regular_14.lineHeight};
    letter-spacing: ${regular_14.letterSpacing};
  `,
};
