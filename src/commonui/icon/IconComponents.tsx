import React from 'react';
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

const IconComponents = {
  alert: AlertIcon,
  backward: BackwardIcon,
  checked: CheckedIcon,
  close: CloseIcon,
  down: DownIcon,
  export: ExportIcon,
  forward: ForwardIcon,
  indeterminate: IndeterminateIcon,
  info: InfoIcon,
  intergration: IntergrationIcon,
  maximize: MaximizeIcon,
  minimize: MinimizeIcon,
  open: OpenIcon,
  print: PrintIcon,
  save: SaveIcon,
  send: SendIcon,
  unchecked: UncheckedIcon,
  up: UpIcon,
  valid: ValidIcon,
};

export default IconComponents;

// [!] 각 아이콘을 React.lazy로 변경하면 아이콘이 사용될 때 로딩됨
// const IconComponents = {
//   alert: React.lazy(() => import('../assets/alert.svg').then((module) => ({ default: module.ReactComponent }))),
//   backward: React.lazy(() => import('../assets/backward.svg').then((module) => ({ default: module.ReactComponent }))),
//   checked: React.lazy(() => import('../assets/checked.svg').then((module) => ({ default: module.ReactComponent }))),
//   close: React.lazy(() => import('../assets/close.svg').then((module) => ({ default: module.ReactComponent }))),
//   down: React.lazy(() => import('../assets/down.svg').then((module) => ({ default: module.ReactComponent }))),
//   export: React.lazy(() => import('../assets/export.svg').then((module) => ({ default: module.ReactComponent }))),
//   indeterminate: React.lazy(() => import('../assets/indeterminate.svg').then((module) => ({ default: module.ReactComponent }))),
//   info: React.lazy(() => import('../assets/info.svg').then((module) => ({ default: module.ReactComponent }))),
//   intergration: React.lazy(() => import('../assets/intergration.svg').then((module) => ({ default: module.ReactComponent }))),
//   maximize: React.lazy(() => import('../assets/maximize.svg').then((module) => ({ default: module.ReactComponent }))),
//   minimize: React.lazy(() => import('../assets/minimize.svg').then((module) => ({ default: module.ReactComponent }))),
//   open: React.lazy(() => import('../assets/open.svg').then((module) => ({ default: module.ReactComponent }))),
//   print: React.lazy(() => import('../assets/print.svg').then((module) => ({ default: module.ReactComponent }))),
//   save: React.lazy(() => import('../assets/save.svg').then((module) => ({ default: module.ReactComponent }))),
//   send: React.lazy(() => import('../assets/send.svg').then((module) => ({ default: module.ReactComponent }))),
//   unchecked: React.lazy(() => import('../assets/unchecked.svg').then((module) => ({ default: module.ReactComponent }))),
//   up: React.lazy(() => import('../assets/up.svg').then((module) => ({ default: module.ReactComponent }))),
//   valid: React.lazy(() => import('../assets/valid.svg').then((module) => ({ default: module.ReactComponent }))),
// };

// export default IconComponents;
