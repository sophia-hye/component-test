import React from 'react';
import Icon from '../icon/Icon';
import styled from 'styled-components';
import ButtonStyle from './ButtonStyle';
import { sysColor } from '@/designtokens/systems/sysColor';
import ButtonHeight48 from '../typography/button/ButtonHeight48';

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
  const iconColor = disabled
    ? sysColor.button.filled.icon.disabled
    : sysColor.button.filled.icon.default;

  return (
    <FilledButtonStyle iconType={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" fillColor={iconColor} />}
      <ButtonHeight48>{children}</ButtonHeight48>
      {icon === 'right' && <Icon iconName="info" fillColor={iconColor} />}
    </FilledButtonStyle>
  );
}

const { filled } = sysColor.button;

const FilledButtonStyle = styled(ButtonStyle)`
  border: none;
  color: ${filled.text.default};
  background-color: ${filled.background.default};
  &:hover {
    background-color: ${filled.background.hovered};
  }

  &:disabled {
    color: ${filled.text.disabled};
    background-color: ${filled.background.disabled};
  }
`;
