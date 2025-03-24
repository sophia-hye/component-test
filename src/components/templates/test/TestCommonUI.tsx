import React from 'react';
import Input from '@/commonui/Input';
import Divider from '@/commonui/Divider';
import Selectbox from '@/commonui/Selectbox';
import ScrollableContainer from '@/commonui/ScrollableContainer';
import Tooltip from '@/commonui/Tooltip';

export default function TestCommonUI() {
  return (
    <div>
      <h3>CommonUI Test</h3>
      <ScrollableContainer>
        <div style={{ display: 'flex', gap: 10 }}>
          <Input placeholder="placeholder" />
          <Divider direction="vertical" length={20} />
          <Input placeholder="disabled" disabled />
        </div>
        <br />
        <Divider direction="horizontal" />
        <br />
        <div style={{ display: 'flex', gap: 10 }}>
          <Input placeholder="test" />
          <Divider direction="vertical" />
          <Input placeholder="test2" />
        </div>
        <br />
        <Divider direction="horizontal" length={20} />
        <br />
        <div style={{ display: 'flex', gap: 10, width: '200px' }}>
          <Selectbox />
        </div>
        <Tooltip>fileName blah blah</Tooltip>
      </ScrollableContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
