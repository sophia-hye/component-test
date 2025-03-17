import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextMedium16({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { medium_16 } = sysTypography.common;

const Styled = {
  Container: styled.span`
    font-family: ${medium_16.fontFamily};
    font-weight: ${medium_16.fontWeight};
    font-size: ${medium_16.fontSize};
    line-height: ${medium_16.lineHeight};
    letter-spacing: ${medium_16.letterSpacing};
  `,
};
