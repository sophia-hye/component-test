import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Icon from '@/commonui/icon/Icon';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
import TextInputbox16 from './typography/table/TextInputbox16';

export default function Selectbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select Channel');
  const selectboxRef = useRef<HTMLDivElement>(null);

  const options: string[] = ['target1', 'target2', 'target3'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectboxRef.current &&
        !selectboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(prev => {
      console.log('selectbox', prev, '->', !prev);
      return !prev;
    });
  };

  const handleOptionSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <Styled.Container ref={selectboxRef}>
      <Styled.Label onClick={handleClick}>
        <TextInputbox16>{selected}</TextInputbox16>
        <Styled.IconWrapper isOpen={isOpen}>
          <Icon
            iconName="down"
            fillColor={sysColor.button.lined.icon.default}
          />
        </Styled.IconWrapper>
      </Styled.Label>
      <Styled.Select isOpen={isOpen}>
        {options.map(option => (
          <Styled.Option
            key={option}
            onClick={() => handleOptionSelect(option)}
          >
            <Icon
              iconName="unchecked"
              fillColor={sysColor.button.lined.icon.default}
            />
            <TextInputbox16>{option}</TextInputbox16>
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.div`
    position: relative;
    width: 100%;
    min-width: 72px;
    height: 40px;
    color: ${sysColor.button.lined.text.default};
    background-color: ${sysColor.button.lined.background.default};
    border-radius: ${sysNumber.button.radius.radius_8};
    border: 1px solid ${sysColor.button.lined.border.default};
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 35px;
    }
    * {
      box-sizing: border-box;
    }
  `,
  Select: styled.ul<{ isOpen: boolean }>`
    list-style-type: none;
    position: absolute;
    width: inherit;
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    top: 28px;
    left: 0;
    padding: 0;
    z-index: 1;
    text-align: left;
    border-radius: ${sysNumber.button.radius.radius_8};
    border: 1px solid ${sysColor.button.lined.border.default};
    color: ${sysColor.button.lined.text.default};
    background-color: ${sysColor.inputbox.backgroundEnabled};
    overflow: hidden;
    transition: 0.3s ease-in;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: lightgray;
    }
    &::-webkit-scrollbar-thumb {
      background: darkgray;
      border-radius: 45px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: gray;
    }
  `,
  Option: styled.li<{ isSelected?: boolean }>`
    display: flex;
    align-items: center;
    vertical-align: middle;
    gap: ${sysNumber.button.gap.gap_4};
    padding: 8px;
    transition: 0.1s;
    background-color: ${sysColor.button.lined.background.default};
    border-bottom: 1px solid ${sysColor.button.lined.border.default};

    &:hover {
      background-color: ${({ isSelected }) =>
        isSelected
          ? sysColor.button.lined.background.default
          : sysColor.button.lined.background.hovered};
    }
    &:last-child {
      border-bottom: 0 none;
    }
  `,
  Label: styled.button`
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    background: transparent;
    cursor: pointer;
    padding: ${sysNumber.inputbox.padding.padding_8};
    padding-left: ${sysNumber.inputbox.padding.padding_12};
    color: ${sysColor.button.lined.text.default};
    border-radius: ${sysNumber.button.radius.radius_8};

    &:hover {
      background-color: ${sysColor.button.lined.background.hovered};
    }
  `,
  IconWrapper: styled.span<{ isOpen: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
    padding: ${sysNumber.inputbox.padding.padding_8};
  `,
};
