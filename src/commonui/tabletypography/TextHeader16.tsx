import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextHeader16({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { header_16 } = sysTypography.table;

const Styled = {
  Container: styled.span`
    font-family: ${header_16.fontFamily};
    font-weight: ${header_16.fontWeight};
    font-size: ${header_16.fontSize};
    line-height: ${header_16.lineHeight};
    letter-spacing: ${header_16.letterSpacing};
  `,
};
