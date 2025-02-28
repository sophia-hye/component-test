import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import ButtonText from './ButtonText';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';

interface ButtonLinedProps {
  children: string;
  icon: 'none' | 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
}
export default function ButtonLined({
  children,
  icon,
  onClick,
  disabled = false,
}: ButtonLinedProps) {
  return (
    <Styled.Button className={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" />}
      <ButtonText>{children}</ButtonText>
      {icon === 'right' && <Icon iconName="info" />}
    </Styled.Button>
  );
}

const { lined } = sysColor.button;
const { button } = sysNumber;

const Styled = {
  Button: styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: ${button.radius.default};
    border: 1px solid ${lined.line.default};

    svg {
      fill: ${lined.icon.default};
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

    color: ${lined.text.default};
    background-color: ${lined.background.default};
    &:hover {
      background-color: ${lined.background.hovered};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${lined.text.disabled};
      border-color: ${lined.line.disabled};
      background-color: ${lined.background.disabled};

      svg {
        fill: ${lined.icon.disabled};
      }
    }
  `,
};
