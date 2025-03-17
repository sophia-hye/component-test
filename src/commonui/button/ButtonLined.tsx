import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
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
  return (
    <Styled.Button className={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" />}
      <ButtonHeight48>{children}</ButtonHeight48>
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
    gap: ${button.gap.gap_4};

    border-radius: ${button.radius.radius_8};
    border: 1px solid ${lined.line.default};

    svg {
      fill: ${lined.icon.default};
    }

    .none {
      padding-top: ${button.padding.top_padding_8};
      padding-right: ${button.padding.right_padding_12};
      padding-bottom: ${button.padding.bottom_padding_8};
      padding-left: ${button.padding.left_padding_12};
    }
    .left {
      padding-top: ${button.padding.top_padding_8};
      padding-right: ${button.padding.right_padding_12};
      padding-bottom: ${button.padding.bottom_padding_8};
      padding-left: ${button.padding.iconSide_padding_8};
    }
    .right {
      padding-top: ${button.padding.top_padding_8};
      padding-right: ${button.padding.iconSide_padding_8};
      padding-bottom: ${button.padding.bottom_padding_8};
      padding-left: ${button.padding.left_padding_12};
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
