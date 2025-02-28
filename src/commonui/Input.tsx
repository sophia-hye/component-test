import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';
import styled, { css } from 'styled-components';

type InputStatusType = 'default' | 'focused' | 'typing' | 'filled' | 'disabled';

const statusStyle = {
  default: css``,
  focused: css`
    border: 1px solid ${sysColor.inputbox.lineTypoing};
  `,
  typing: css`
    gap: ${sysNumber.table.padding.default};
    border: 1px solid ${sysColor.inputbox.lineTypoing};
  `,
  filled: css`
    gap: ${sysNumber.table.padding.default};
  `,
  disabled: css`
    gap: ${sysNumber.table.padding.default};
    background: ${sysColor.inputbox.backgroundDisabled};
  `,
};

const Input = styled.input<{ status: InputStatusType }>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  width: 176px;
  height: 32px;

  padding: ${sysNumber.table.padding.default} ${sysNumber.table.padding.medium};

  border: 1px solid ${sysColor.inputbox.lineDefault};
  background: ${sysColor.white};

  ${({ status }) => statusStyle[status]}
`;
export default Input;
