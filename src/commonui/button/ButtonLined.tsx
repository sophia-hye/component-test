import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../icon/Icon';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
import ButtonHeight48 from '../typography/button/ButtonHeight48';
import PaddingStyle from './ButtonStyle';

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
    <StyledButton iconType={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" fillColor={iconColor} />}
      <ButtonHeight48>{children}</ButtonHeight48>
      {icon === 'right' && <Icon iconName="info" fillColor={iconColor} />}
    </StyledButton>
  );
}

const { lined } = sysColor.button;
const { button } = sysNumber;

const StyledButton = styled.button<{ iconType: 'none' | 'left' | 'right' }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${button.gap.gap_4};

  border-radius: ${button.radius.radius_8};
  border: 1px solid ${lined.border.default};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ iconType }) => PaddingStyle[iconType]}

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
