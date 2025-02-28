import { refNumber } from '../references/refNumber';

export const sysNumber = {
  table: {
    height: { checkbox: refNumber.px[32] },
    width: {
      checkbox: refNumber.px[32],
      no: refNumber.px[36],
      well: refNumber.px[42],
      sampleId: refNumber.px[240],
      result: refNumber.px[184],
      type: refNumber.px[76],
      comment: refNumber.px[190],
      target: refNumber.px[72],
    },
    lineHeight: {
      small: refNumber.px[24],
      default: refNumber.px[32],
      medium: refNumber.px[40],
    },
    padding: {
      small: refNumber.px[2],
      default: refNumber.px[4],
      medium: refNumber.px[8],
    },
    radius: {
      default: refNumber.px[8],
    },
  },
  button: {
    padding: {
      xsmall: refNumber.px[4],
      small: refNumber.px[8],
      default: refNumber.px[12],
      medium: refNumber.px[16],
    },
    radius: {
      small: refNumber.px[4],
      default: refNumber.px[8],
    },
  },
  icon: {
    height: {
      default: refNumber.px[24],
    },
    width: {
      default: refNumber.px[24],
    },
  },
};
