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
    textboxHeight: {
      24: refNumber.px[24], //small
      32: refNumber.px[32], //default
      40: refNumber.px[40], //medium
    },
    padding: {
      defaultCell: {
        left_padding_4: refNumber.px[4],
        right_padding_4: refNumber.px[4],
        top_padding_4: refNumber.px[4],
        bottom_padding_4: refNumber.px[4],
        right_padding_0: refNumber.px[0],
      },
      targetCell: {
        left_padding_4: refNumber.px[4],
        right_padding_4: refNumber.px[4],
        top_padding_2: refNumber.px[2],
        bottom_padding_2: refNumber.px[2],
      },
    },
    radius: {
      default: refNumber.px[8],
    },
  },
  button: {
    padding: {
      // left_padding_12: refNumber.px[12],
      // right_padding_12: refNumber.px[12],
      // top_padding_8: refNumber.px[8],
      // bottom_padding_8: refNumber.px[16],
      // iconSide_padding_8: refNumber.px[8],

      padding_8: refNumber.px[8],
      padding_12: refNumber.px[12],
      iconSide_8: refNumber.px[8],
    },
    gap: {
      gap_4: refNumber.px[4],
    },
    radius: {
      radius_4: refNumber.px[4],
      radius_8: refNumber.px[8],
    },
  },
  icon: {
    width: {
      width_20: refNumber.px[20],
      width_24: refNumber.px[24],
    },
    height: {
      width_20: refNumber.px[20],
      height_24: refNumber.px[24],
    },
  },
  chip: {
    padding: {
      padding_2: refNumber.px[2],
      padding_8: refNumber.px[8],
    },
    radius: {
      radius_16: refNumber.px[16],
    },
  },
  inputbox: {
    padding: {
      padding_4: refNumber.px[4],
      padding_8: refNumber.px[8],
      padding_12: refNumber.px[12],
    },
    gap: {
      gap_4: refNumber.px[4],
    },
  },
};
