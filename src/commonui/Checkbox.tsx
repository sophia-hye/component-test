import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Icon from './icon/Icon';

type CheckboxStatusType = 'checked' | 'unchecked' | 'indeterminate';

interface CheckboxProps {
  status: CheckboxStatusType;
  onChange: (prevStatus: CheckboxStatusType) => void;
}

export default function Checkbox({ status, onChange }: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = status === 'indeterminate';
    }
  }, [status]);

  const handleClick = () => {
    if (status === 'checked') {
      onChange('checked');
    } else if (status === 'unchecked') {
      onChange('unchecked');
    } else {
      onChange('indeterminate');
    }
  };

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Input
        type="checkbox"
        checked={status === 'checked'}
        ref={checkboxRef}
      />
      {status === 'checked' && <Icon iconName="checked" />}
      {status === 'unchecked' && <Icon iconName="unchecked" />}
      {status === 'indeterminate' && <Icon iconName="indeterminate" />}
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.div<{ onClick: () => void }>`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  `,
  Input: styled.input.attrs({ type: 'checkbox' })<{ checked: boolean }>`
    display: none;
  `,
};
