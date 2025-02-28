import { refColor } from '../references/refColor';

export const sysColor = {
  black: refColor.gray[1000],
  white: refColor.gray[0],
  common: {
    text: {
      default: refColor.coolgray[1000],
    },
    icon: {
      default: refColor.coolgray[1000],
    },
    background: {
      default: refColor.gray[0],
      hovered: refColor.coolgray[100],
      selected: refColor.coolgray[200],
    },
  },
  tableCell: {
    text: refColor.coolgray[1000],
    line: refColor.coolgray[400],
    normal: {
      default: refColor.gray[0],
      hovered: refColor.coolgray[100],
      selected: refColor.coolgray[200],
    },
    positive: {
      default: refColor.red[500],
      hovered: refColor.red[600],
      selected: refColor.red[700],
    },
    invalid: {
      default: refColor.gray[100],
      hovered: refColor.gray[200],
      selected: refColor.gray[300],
    },
    het: {
      default: refColor.yellow[300],
      hovered: refColor.yellow[500],
      selected: refColor.yellow[600],
    },
    homo: {
      default: refColor.orange[300],
      hovered: refColor.orange[400],
      selected: refColor.orange[500],
    },
    channel1: {
      color1: refColor.cyan[900],
      color2: refColor.cyan[100],
    },
    channel2: {
      color1: refColor.green[900],
      color2: refColor.green[100],
    },
    channel3: {
      color1: refColor.yellow[900],
      color2: refColor.yellow[100],
    },
    channel4: {
      color1: refColor.pink[900],
      color2: refColor.pink[100],
    },
    channel5: {
      color1: refColor.brown[900],
      color2: refColor.brown[100],
    },
  },
  scrollbar: {
    background: refColor.gray[100],
    disabled: refColor.gray[300],
    enabled: refColor.gray[400],
  },
  inputbox: {
    textHinting: refColor.coolgray[400],
    textTyping: refColor.coolgray[1000],
    lineDefault: refColor.coolgray[400],
    lineTypoing: refColor.blue[700],
    backgroundEnabled: refColor.gray[0],
    backgroundDisabled: refColor.gray[100],
  },
  icon: {
    default1: refColor.blue[700],
    disabled1: refColor.blue[200],
    default2: refColor.coolgray[1000],
  },
  button: {
    filled: {
      background: {
        default: refColor.blue[700],
        hovered: refColor.blue[600],
        disabled: refColor.coolgray[300],
      },
      text: {
        default: refColor.gray[0],
        disabled: refColor.gray[0],
      },
      icon: {
        default: refColor.gray[0],
        disabled: refColor.gray[0],
      },
    },
    lined: {
      background: {
        default: refColor.gray[0],
        hovered: refColor.blue[100],
        disabled: refColor.gray[0],
      },
      line: {
        default: refColor.blue[700],
        disabled: refColor.coolgray[300],
      },
      text: {
        default: refColor.blue[700],
        disabled: refColor.coolgray[300],
      },
      icon: {
        default: refColor.blue[700],
        disabled: refColor.coolgray[300],
      },
    },
  },
};
