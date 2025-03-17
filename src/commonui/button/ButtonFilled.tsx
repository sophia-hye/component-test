import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
import ButtonHeight48 from '../typography/button/ButtonHeight48';
import PaddingStyle from './ButtonStyle';

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
    <StyledButton iconType={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" fillColor={iconColor} />}
      <ButtonHeight48>{children}</ButtonHeight48>
      {icon === 'right' && <Icon iconName="info" fillColor={iconColor} />}
    </StyledButton>
  );
}

const { filled } = sysColor.button;
const { button } = sysNumber;

const StyledButton = styled.button<{ iconType: 'none' | 'left' | 'right' }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${button.gap.gap_4};

  border-radius: ${button.radius.radius_8};
  border: none;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ iconType }) => PaddingStyle[iconType]}

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
