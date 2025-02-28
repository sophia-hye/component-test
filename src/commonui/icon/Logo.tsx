import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from '../assets/logoImage.svg';
import { ReactComponent as LogoText } from '../assets/logoText.svg';
import { sysNumber } from '@/designtokens/systems/sysNumber';

export default function Logo() {
  return (
    <Styled.Container>
      <LogoImage />
      <LogoText />
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
    height: ${sysNumber.icon.height.default};
  `,
};
