import React, { useState } from 'react';
import styled from 'styled-components';
import { sysColor } from '@/designtokens/systems/sysColor';

interface Props {
  usage?:
    | 'default'
    | 'channel1'
    | 'channel2'
    | 'channel3'
    | 'channel4'
    | 'channel5';
  onClick?: () => void;
  disabled?: boolean;
}

export default function ButtonToggle({
  usage = 'default',
  onClick,
  disabled = false,
}: Props) {
  const [isOn, setIsOn] = useState(false);

  const { toggle } = sysColor.button;
  const { tableCell } = sysColor;
  const color: {
    toggle: {
      on: string;
      off: string;
    };
    circle: string;
  } = {
    toggle: {
      on: toggle.background.on,
      off: toggle.background.off,
    },
    circle: toggle.circle.default,
  };

  switch (usage) {
    case 'channel1':
      color.toggle.on = tableCell.channel1.color1;
      color.toggle.off = tableCell.channel1.color2;
      break;
    case 'channel2':
      color.toggle.on = tableCell.channel2.color1;
      color.toggle.off = tableCell.channel2.color2;
      break;
    case 'channel3':
      color.toggle.on = tableCell.channel3.color1;
      color.toggle.off = tableCell.channel3.color2;
      break;
    case 'channel4':
      color.toggle.on = tableCell.channel4.color1;
      color.toggle.off = tableCell.channel4.color2;
      break;
    case 'channel5':
      color.toggle.on = tableCell.channel5.color1;
      color.toggle.off = tableCell.channel5.color2;
      break;
    default:
      color.toggle.on = toggle.background.on;
      color.toggle.off = toggle.background.off;
      break;
  }

  const handleClick = () => {
    setIsOn(prev => !prev);
    if (onClick) onClick();
  };

  return (
    <Styled.Toggle
      onClick={disabled ? undefined : handleClick}
      isOn={isOn}
      disabled={disabled}
      toggleOffColor={color.toggle.off}
      toggleOnColor={color.toggle.on}
    >
      <Styled.Circle
        isOn={isOn}
        disabled={disabled}
        circleColor={color.circle}
      />
    </Styled.Toggle>
  );
}

const Styled = {
  Toggle: styled.div<{
    isOn: boolean;
    disabled: boolean;
    toggleOffColor: string;
    toggleOnColor: string;
  }>`
    display: flex;
    position: relative;
    align-items: center;

    width: 32px;
    height: 20px;
    padding: 2px;

    border-radius: 20px;
    background-color: ${props =>
      props.isOn ? props.toggleOnColor : props.toggleOffColor};

    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s ease;
    opacity: ${props => (props.disabled ? 0.6 : 1)};
  `,
  Circle: styled.div<{ isOn: boolean; disabled: boolean; circleColor: string }>`
    position: absolute;
    left: ${props => (props.isOn ? '18px' : '2px')};

    width: 16px;
    height: 16px;

    border-radius: 50%;
    background-color: ${props => props.circleColor};
    transition: left 0.3s ease;
  `,
};
