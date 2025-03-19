import React from 'react';
import Input from '@/commonui/Input';
import Divider from '@/commonui/Divider';
import Selectbox from '@/commonui/Selectbox';

export default function TestCommonUI() {
  return (
    <div>
      <h3>CommonUI Test</h3>
      <div style={{ display: 'flex', gap: 10 }}>
        <Input placeholder="placeholder" />
        <Divider direction="vertical" />
        <Divider direction="vertical" length={20} />
        <Input disabled placeholder="disabled" />
      </div>
      <br />
      <Divider direction="horizontal" /> <br />
      <Divider direction="horizontal" length={20} />
      <br />
      <div style={{ display: 'flex', gap: 10, width: '200px' }}>
        <Selectbox />
      </div>
      <br />
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
