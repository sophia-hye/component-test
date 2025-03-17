import React from 'react';
import styled from 'styled-components';
import { sysTypography } from '@/designtokens/systems/sysTypography';

interface Props {
  children: string;
}

export default function ButtonHeight48({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}

const { btnHeight_48 } = sysTypography.button;

const Styled = {
  Container: styled.div`
    text-align: center;

    font-family: ${btnHeight_48.fontFamily};
    font-weight: ${btnHeight_48.fontWeight};
    font-size: ${btnHeight_48.fontSize};
    line-height: ${btnHeight_48.lineHeight};
    letter-spacing: ${btnHeight_48.letterSpacing};
  `,
};
