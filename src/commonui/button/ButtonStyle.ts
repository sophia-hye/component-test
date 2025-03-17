import { sysNumber } from '@/designtokens/systems/sysNumber';
import { css } from 'styled-components';

const { padding } = sysNumber.button;

const PaddingStyle = {
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

export default PaddingStyle;
