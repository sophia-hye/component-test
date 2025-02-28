import React, { memo, Suspense } from 'react';
import styled from 'styled-components';
import IconComponents from './IconComponents';
import { sysNumber } from '@/designtokens/systems/sysNumber';

type IconNameType = keyof typeof IconComponents;

interface IconProps {
  iconName: IconNameType;
}

const Icon = memo(({ iconName }: IconProps) => {
  const IconComponent = IconComponents[iconName];

  return (
    <Styled.Container>
      <IconComponent />
    </Styled.Container>
  );

  // [!] IconComponents 컴포넌트를 lazy import로 변경하면 Suspense로 감싸줘야 함
  // return (
  //   <Suspense fallback={<div>Loading...</div>}>
  //     <Styled.Container>
  //       <IconComponent />
  //     </Styled.Container>
  //   </Suspense>
  // );
});

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
    aspect-ratio: 1/1;

    cursor: pointer;

    width: ${sysNumber.icon.width.default};
    height: ${sysNumber.icon.height.default};
  `,
};

export default Icon;
