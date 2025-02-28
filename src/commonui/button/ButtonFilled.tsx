import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import ButtonText from './ButtonText';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';

interface ButtonFilledProps {
  children: string;
  icon: 'none' | 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
}

export default function ButtonFilled({
  children,
  icon,
  onClick,
  disabled = false,
}: ButtonFilledProps) {
  return (
    <Styled.Button className={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" />}
      <ButtonText>{children}</ButtonText>
      {icon === 'right' && <Icon iconName="info" />}
    </Styled.Button>
  );
}

const { filled } = sysColor.button;
const { button } = sysNumber;

const Styled = {
  Button: styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: ${button.radius.default};

    svg {
      fill: ${filled.icon.default};
    }

    .none {
      padding: ${button.padding.small} ${button.padding.default};
    }
    .left {
      padding: ${button.padding.default} ${button.padding.default}
        ${button.padding.default} ${button.padding.small};
    }
    .right {
      padding: ${button.padding.small} ${button.padding.small}
        ${button.padding.small} ${button.padding.default};
    }

    color: ${filled.text.default};
    background-color: ${filled.background.default};
    &:hover {
      background-color: ${filled.background.hovered};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${filled.text.disabled};
      background-color: ${filled.background.disabled};

      svg {
        fill: ${filled.icon.disabled};
      }
    }
  `,
};
