import React, { memo } from 'react';
import { ReactComponent as AlertIcon } from '@/assets/alert.svg';
import { ReactComponent as BackwardIcon } from '@/assets/backwardTab.svg';
import { ReactComponent as CheckedIcon } from '@/assets/checked.svg';
import { ReactComponent as CloseIcon } from '@/assets/close.svg';
import { ReactComponent as DownIcon } from '@/assets/down.svg';
import { ReactComponent as ExportIcon } from '@/assets/export.svg';
import { ReactComponent as ForwardIcon } from '@/assets/forwardTab.svg';
import { ReactComponent as IndeterminateIcon } from '@/assets/indeterminate.svg';
import { ReactComponent as InfoIcon } from '@/assets/info.svg';
import { ReactComponent as IntergrationIcon } from '@/assets/intergration.svg';
import { ReactComponent as MaximizeIcon } from '@/assets/maximize.svg';
import { ReactComponent as MinimizeIcon } from '@/assets/minimize.svg';
import { ReactComponent as OpenIcon } from '@/assets/open.svg';
import { ReactComponent as PrintIcon } from '@/assets/print.svg';
import { ReactComponent as SaveIcon } from '@/assets/save.svg';
import { ReactComponent as SendIcon } from '@/assets/send.svg';
import { ReactComponent as UncheckedIcon } from '@/assets/unchecked.svg';
import { ReactComponent as UpIcon } from '@/assets/up.svg';
import { ReactComponent as ValidIcon } from '@/assets/valid.svg';

type IconNameType =
  | 'alert'
  | 'backward'
  | 'checked'
  | 'close'
  | 'down'
  | 'export'
  | 'forward'
  | 'indeterminate'
  | 'info'
  | 'intergration'
  | 'maximize'
  | 'minimize'
  | 'open'
  | 'print'
  | 'save'
  | 'send'
  | 'unchecked'
  | 'up'
  | 'valid';

interface IconProps {
  iconName: IconNameType;
  fillColor?: string;
}

const Icon = memo(({ iconName, fillColor }: IconProps) => {
  const defaultColor = fillColor ?? '#343434';
  switch (iconName) {
    case 'alert':
      const alertColor = fillColor ?? '#D31212';
      return <AlertIcon fill={alertColor} />;
    case 'backward':
      return <BackwardIcon fill={defaultColor} />;
    case 'checked':
      const checkedColor = fillColor ?? '#2930DB';
      return <CheckedIcon fill={checkedColor} width={30} />;
    case 'close':
      return <CloseIcon fill={defaultColor} />;
    case 'down':
      return <DownIcon fill={defaultColor} />;
    case 'export':
      return <ExportIcon fill={defaultColor} />;
    case 'forward':
      return <ForwardIcon fill={defaultColor} />;
    case 'indeterminate':
      const indeterminateColor = fillColor ?? '#2930DB';
      return <IndeterminateIcon fill={indeterminateColor} />;
    case 'info':
      return <InfoIcon fill={defaultColor} />;
    case 'intergration':
      return <IntergrationIcon fill={defaultColor} />;
    case 'maximize':
      return <MaximizeIcon fill={defaultColor} />;
    case 'minimize':
      return <MinimizeIcon fill={defaultColor} />;
    case 'open':
      return <OpenIcon fill={defaultColor} />;
    case 'print':
      return <PrintIcon fill={defaultColor} />;
    case 'save':
      return <SaveIcon fill={defaultColor} />;
    case 'send':
      return <SendIcon fill={defaultColor} />;
    case 'unchecked':
      const uncheckedColor = fillColor ?? '#2930DB';
      return <UncheckedIcon fill={uncheckedColor} />;
    case 'up':
      return <UpIcon fill={defaultColor} />;
    case 'valid':
      const validColor = fillColor ?? '#00B312';
      return <ValidIcon fill={validColor} />;
    default:
      return <div></div>;
  }
});

export default Icon;
