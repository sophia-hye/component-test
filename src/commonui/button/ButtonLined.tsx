import React from 'react';
import Icon from '../icon/Icon';
import styled from 'styled-components';
import ButtonStyle from './ButtonStyle';
import { sysColor } from '@/designtokens/systems/sysColor';
import ButtonHeight48 from '../typography/button/ButtonHeight48';

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
  const iconColor = disabled
    ? sysColor.button.lined.icon.disabled
    : sysColor.button.lined.icon.default;

  return (
    <LinedButtonStyle iconType={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" fillColor={iconColor} />}
      <ButtonHeight48>{children}</ButtonHeight48>
      {icon === 'right' && <Icon iconName="info" fillColor={iconColor} />}
    </LinedButtonStyle>
  );
}

const { lined } = sysColor.button;

const LinedButtonStyle = styled(ButtonStyle)`
  border: 1px solid ${lined.border.default};
  color: ${lined.text.default};
  background-color: ${lined.background.default};
  &:hover {
    background-color: ${lined.background.hovered};
  }

  &:disabled {
    color: ${lined.text.disabled};
    border-color: ${lined.border.disabled};
    background-color: ${lined.background.disabled};
  }
`;
