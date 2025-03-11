import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './icon/Icon';
import { sysColor } from '@designtokens/systems/sysColor';
import CellInput from './typography/CellInput';

export default function Selectbox() {
  // 동작
  // 1. 클릭시 옵션 목록이 열림
  // 2. 한번 더 클릭시 옵션 목록이 닫힘
  // 3. 옵션 클릭시 옵션의 텍스트가 select 안으로 들어가면서 옵션 목록이 닫힘

  const [isOpen, setIsOpen] = useState(false);
  const selected: string = 'Sample';
  const options: string[] = ['Sample', 'NC', 'PC'];

  const handleClick = () => {
    setIsOpen(prev => {
      console.log('selectbox', prev, '->', !prev);
      return !prev;
    });
  };

  return (
    <Styled.Container>
      <Styled.Label onClick={handleClick}>
        <CellInput>{selected}</CellInput>
      </Styled.Label>
      <Styled.IconWrapper onClick={handleClick} isOpen={isOpen}>
        <Icon iconName="down" />
      </Styled.IconWrapper>
      <Styled.Select isOpen={isOpen}>
        {options.map(option => (
          <Styled.Option key={option}>
            <CellInput>{option}</CellInput>
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
    height: inherit;
    border-radius: 8px;
    color: ${sysColor.inputbox.textTyping};
    border: 1px solid ${sysColor.inputbox.lineDefault};
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
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    top: 20px;
    left: 0;
    padding: 0;
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
      border-radius: 45px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: gray;
    }
  `,
  Option: styled.li`
    padding: 8px;
    transition: 0.1s;

    &:hover {
      background-color: ${sysColor.common.background.hovered};
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
    z-index: 1;
    width: 32px;
    height: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
  `,
};
