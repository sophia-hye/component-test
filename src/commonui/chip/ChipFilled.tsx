import React from 'react';
import styled from 'styled-components';
import { sysNumber } from '@/designtokens/systems/sysNumber';
import { sysColor } from '@/designtokens/systems/sysColor';
import TextRegular12 from '../typography/TextRegular12';

interface Props {
  children: string;
}

export default function ChipFilled({ children }: Props) {
  return (
    <Styled.Chip>
      <TextRegular12>{children}</TextRegular12>
    </Styled.Chip>
  );
}

const { chip } = sysNumber;

const Styled = {
  Chip: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: fit-content;
    padding: ${chip.padding.padding_2} ${chip.padding.padding_8};

    color: ${sysColor.chip.filled.text.default};
    background-color: ${sysColor.chip.filled.background.default};

    border-radius: ${chip.radius.radius_16};
  `,
};
