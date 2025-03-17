import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextHeader14({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { header_14 } = sysTypography.table;

const Styled = {
  Container: styled.span`
    font-family: ${header_14.fontFamily};
    font-weight: ${header_14.fontWeight};
    font-size: ${header_14.fontSize};
    line-height: ${header_14.lineHeight};
    letter-spacing: ${header_14.letterSpacing};
  `,
};
