import React from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
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
  return (
    <Styled.Button className={icon} onClick={onClick} disabled={disabled}>
      {icon === 'left' && <Icon iconName="info" />}
      <ButtonHeight48>{children}</ButtonHeight48>
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
    gap: ${button.gap.gap_4};

    border-radius: ${button.radius.radius_8};

    svg {
      fill: ${filled.icon.default};
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
