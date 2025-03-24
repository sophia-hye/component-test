import React from 'react';
import styled from 'styled-components';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';

interface TooltipProps {
  children: string;
}

export default function Tooltip({ children }: TooltipProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

const Styled = {
  Container: styled.div`
    display: flex;
    width: fit-content;
    padding: ${sysNumber.common.padding.padding_12};
    justify-content: center;
    align-items: center;

    border-radius: ${sysNumber.common.radius.radius_8};
    background: ${sysColor.common.background.default};

    /* pop-up shadow */
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  `,
};
