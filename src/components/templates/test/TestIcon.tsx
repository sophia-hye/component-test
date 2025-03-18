import React from 'react';
import Icon from '@/commonui/icon/Icon';
import Logo from '@/commonui/icon/Logo';

export default function TestIcon() {
  return (
    <div>
      <h3>Icon Test</h3>
      <div style={{ display: 'flex', gap: 10 }}>
        <Logo />
        <Logo fillColor="darkred" />
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10 }}>
        <Icon iconName="alert" />
        <Icon iconName="backward" />
        <Icon iconName="checked" />
        <Icon iconName="close" />
        <Icon iconName="down" />
        <Icon iconName="export" />
        <Icon iconName="forward" />
        <Icon iconName="indeterminate" />
        <Icon iconName="info" />
        <Icon iconName="intergration" />
        <Icon iconName="maximize" />
        <Icon iconName="minimize" />
        <Icon iconName="open" />
        <Icon iconName="print" />
        <Icon iconName="save" />
        <Icon iconName="send" />
        <Icon iconName="unchecked" />
        <Icon iconName="up" />
        <Icon iconName="valid" />
      </div>
      <br />
      <div style={{ display: 'flex', gap: 10, backgroundColor: 'black' }}>
        <Icon iconName="alert" fillColor="white" />
        <Icon iconName="backward" fillColor="white" />
        <Icon iconName="checked" fillColor="white" />
        <Icon iconName="close" fillColor="white" />
        <Icon iconName="down" fillColor="white" />
        <Icon iconName="export" fillColor="white" />
        <Icon iconName="forward" fillColor="white" />
        <Icon iconName="indeterminate" fillColor="white" />
        <Icon iconName="info" fillColor="white" />
        <Icon iconName="intergration" fillColor="white" />
        <Icon iconName="maximize" fillColor="white" />
        <Icon iconName="minimize" fillColor="white" />
        <Icon iconName="open" fillColor="white" />
        <Icon iconName="print" fillColor="white" />
        <Icon iconName="save" fillColor="white" />
        <Icon iconName="send" fillColor="white" />
        <Icon iconName="unchecked" fillColor="white" />
        <Icon iconName="up" fillColor="white" />
        <Icon iconName="valid" fillColor="white" />
      </div>
    </div>
  );
}
