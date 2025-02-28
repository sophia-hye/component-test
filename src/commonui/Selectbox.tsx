import React from 'react';
import styled from 'styled-components';

export default function Selectbox() {
  // 동작
  // 1. 클릭시 옵션 목록이 열림
  // 2. 한번 더 클릭시 옵션 목록이 닫힘
  // 3. 옵션 클릭시 옵션의 텍스트가 select 안으로 들어가면서 옵션 목록이 닫힘

  const selected = 'Sample';
  const options = ['Sample', 'NC', 'PC'];

  return (
    <Styled.Container>
      <Styled.Label>{selected}</Styled.Label>
      <Styled.Select>
        {options.map(option => (
          <Styled.Option>{option}</Styled.Option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.div`
    position: relative;
    width: 150px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid var(--blue-700, #2930db);
    background: url('https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png')
      calc(100% - 7px) center no-repeat;
    background-size: 24px;
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      width: 2px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 35px;
      background: var(--gray-0, #fff);
    }
    * {
      box-sizing: border-box;
    }
  `,
  Select: styled.ul`
    list-style-type: none;

    position: absolute;
    width: 100%;
    max-height: 0;
    top: 28px;
    left: 0;

    /* padding: 0; */
    padding: 8px 8px 8px 12px;
    border-radius: 8px;
    border: 1px solid var(--blue-700, #2930db);
    color: green;
    background-color: var(--gray-0, #fff);

    overflow: hidden;
    transition: 0.3s ease-in;

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
    padding: 8px 8px 8px 12px;
    transition: 0.1s;

    &:hover {
      background-color: blue;
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
    padding-left: 15px;
    background: transparent;
    cursor: pointer;
  `,
};
