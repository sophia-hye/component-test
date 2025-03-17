import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function TextCell14({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { cell_14 } = sysTypography.table;

const Styled = {
  Container: styled.span`
    font-family: ${cell_14.fontFamily};
    font-weight: ${cell_14.fontWeight};
    font-size: ${cell_14.fontSize};
    line-height: ${cell_14.lineHeight};
    letter-spacing: ${cell_14.letterSpacing};
  `,
};
