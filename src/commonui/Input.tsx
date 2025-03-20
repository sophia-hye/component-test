import styled from 'styled-components';
import { sysColor } from '@/designtokens/systems/sysColor';
import { sysNumber } from '@/designtokens/systems/sysNumber';

const { inputbox } = sysColor;
const { inputbox: inputboxNumber } = sysNumber;

const Input = styled.input`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 176px;
  height: 32px;

  padding: ${() =>
    `${inputboxNumber.padding.padding_4} ${inputboxNumber.padding.padding_8}`};

  /* text color */
  color: ${inputbox.textTyping};
  caret-color: ${inputbox.lineTyping};
  &::placeholder {
    color: ${inputbox.textHinting};
  }

  /* border color */
  border: 1px solid ${inputbox.lineDefault};
  &:focus {
    outline: none;
    border-color: ${inputbox.lineTyping};
  }

  /* background color */
  background-color: ${inputbox.backgroundEnabled};
  &:disabled {
    color: ${inputbox.textDisabled};
    background-color: ${inputbox.backgroundDisabled};
  }
`;
export default Input;
