// Button.tsx
import React from 'react';
import ButtonFilled from './ButtonFilled';
import ButtonLined from './ButtonLined';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = {
  Filled: ({ children, onClick, disabled }: ButtonProps) => (
    <ButtonFilled icon="none" onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFilled>
  ),

  FilledLeftIcon: ({ children, onClick, disabled }: ButtonProps) => (
    <ButtonFilled icon="left" onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFilled>
  ),

  FilledRightIcon: ({ children, onClick, disabled }: ButtonProps) => (
    <ButtonFilled icon="right" onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFilled>
  ),

  Lined: ({ children, onClick, disabled }: ButtonProps) => (
    <ButtonLined icon="none" onClick={onClick} disabled={disabled}>
      {children}
    </ButtonLined>
  ),

  LinedLeftIcon: ({ children, onClick, disabled }: ButtonProps) => (
    <ButtonLined icon="left" onClick={onClick} disabled={disabled}>
      {children}
    </ButtonLined>
  ),

  LinedRightIcon: ({ children, onClick, disabled }: ButtonProps) => (
    <ButtonLined icon="right" onClick={onClick} disabled={disabled}>
      {children}
    </ButtonLined>
  ),
};

export default Button;
