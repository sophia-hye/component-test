import { refTypography } from '../references/refTypography';

export const sysTypography2 = {
  common: {
    fontFamily: {
      default: refTypography.fontFamily.notoSans,
    },
    fontWeight: {
      regular: refTypography.weight[400],
      medium: refTypography.weight[500],
    },
    fontSize: {
      small: refTypography.size[14],
      default: refTypography.size[16],
    },
    lineHeight: {
      small: refTypography.lineHeight[20],
      default: refTypography.lineHeight[24],
    },
    letterSpacing: {
      default: refTypography.letterSpacing.default,
    },
  },
  table: {
    fontFamily: {
      default: refTypography.fontFamily.notoSans,
    },
    fontWeight: {
      regular: refTypography.weight[400],
      medium: refTypography.weight[500],
      bold: refTypography.weight[700],
    },
    fontSize: {
      small: refTypography.size[14],
      default: refTypography.size[16],
    },
    lineHeight: {
      small: refTypography.lineHeight[20],
      default: refTypography.lineHeight[24],
    },
    letterSpacing: {
      default: refTypography.letterSpacing.default,
    },
  },
  button: {
    fontFamily: {
      default: refTypography.fontFamily.notoSans,
    },
    fontWeight: {
      medium: refTypography.weight[500],
    },
    fontSize: {
      default: refTypography.size[16],
    },
    lineHeight: {
      default: refTypography.lineHeight[24],
    },
    letterSpacing: {
      default: refTypography.letterSpacing.default,
    },
  },
};
