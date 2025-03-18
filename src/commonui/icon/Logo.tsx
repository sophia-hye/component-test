import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '@/assets/logoImage.svg';
import { ReactComponent as LogoText } from '@/assets/logoText.svg';
import { sysNumber } from '@/designtokens/systems/sysNumber';

interface Props {
  fillColor?: string;
}

export default function Logo({ fillColor }: Props) {
  const logoColor = fillColor ?? '#525252';
  return (
    <Styled.Container>
      <LogoImage fill={logoColor} />
      <LogoText fill={logoColor} />
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
    aspect-ratio: 109/24;

    gap: 6.419px;
    padding: 1px 0.294px 1px 0px;

    cursor: pointer;

    width: 109px;
    height: ${sysNumber.icon.height.height_24};
  `,
};
