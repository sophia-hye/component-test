import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextCell16({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { cell_16 } = sysTypography.table;

const Styled = {
  Container: styled.span`
    font-family: ${cell_16.fontFamily};
    font-weight: ${cell_16.fontWeight};
    font-size: ${cell_16.fontSize};
    line-height: ${cell_16.lineHeight};
    letter-spacing: ${cell_16.letterSpacing};
  `,
};
