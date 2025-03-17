import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextInputbox16({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { inputbox_16 } = sysTypography.table;

const Styled = {
  Container: styled.span`
    font-family: ${inputbox_16.fontFamily};
    font-weight: ${inputbox_16.fontWeight};
    font-size: ${inputbox_16.fontSize};
    line-height: ${inputbox_16.lineHeight};
    letter-spacing: ${inputbox_16.letterSpacing};
  `,
};
