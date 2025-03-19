import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Icon from './icon/Icon';
import { sysColor } from '@designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
import TextInputbox16 from './typography/table/TextInputbox16';

export default function TableSelectbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Sample');
  const selectboxRef = useRef<HTMLDivElement>(null);

  const options: string[] = ['Sample', 'NC', 'PC'];

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
      console.log('tableselectbox', prev, '->', !prev);
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
      </Styled.Label>
      <Styled.IconWrapper onClick={handleClick} isOpen={isOpen}>
        <Icon iconName="down" />
      </Styled.IconWrapper>
      <Styled.Select isOpen={isOpen}>
        {options.map(option => (
          <Styled.Option
            key={option}
            onClick={() => handleOptionSelect(option)}
            isSelected={selected === option}
          >
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
    height: inherit;
    min-width: ${sysNumber.table.width.type};
    color: ${sysColor.inputbox.textTyping};
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
    width: 100%;
    min-width: ${sysNumber.table.width.type};
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    top: 24px;
    left: 0;
    padding: 0;
    z-index: 1;
    text-align: left;
    border-radius: 8px;
    border: 1px solid ${sysColor.inputbox.lineDefault};
    color: ${sysColor.inputbox.textTyping};
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
    }
    &::-webkit-scrollbar-thumb:hover {
      background: gray;
    }
  `,
  Option: styled.li<{ isSelected?: boolean }>`
    padding: 8px;
    transition: 0.1s;
    background-color: ${({ isSelected }) =>
      isSelected ? sysColor.common.background.selected : 'transparent'};

    &:hover {
      background-color: ${({ isSelected }) =>
        isSelected
          ? sysColor.common.background.selected
          : sysColor.common.background.hovered};
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
  `,
};
