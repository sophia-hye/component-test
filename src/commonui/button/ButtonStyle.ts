import { sysNumber } from '@/designtokens/systems/sysNumber';
import styled, { css } from 'styled-components';

const { button } = sysNumber;
const { padding } = button;

const buttonPadding = {
  none: css`
    padding-top: ${padding.padding_8};
    padding-right: ${padding.padding_12};
    padding-bottom: ${padding.padding_8};
    padding-left: ${padding.padding_12};
  `,
  left: css`
    padding-top: ${padding.padding_8};
    padding-right: ${padding.padding_12};
    padding-bottom: ${padding.padding_8};
    padding-left: ${padding.iconSide_8};
  `,
  right: css`
    padding-top: ${padding.padding_8};
    padding-right: ${padding.iconSide_8};
    padding-bottom: ${padding.padding_8};
    padding-left: ${padding.padding_12};
  `,
};

const ButtonStyle = styled.button<{ iconType: 'none' | 'left' | 'right' }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  gap: ${button.gap.gap_4};

  border-radius: ${button.radius.radius_8};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  ${({ iconType }) => buttonPadding[iconType]}
`;

export default ButtonStyle;
